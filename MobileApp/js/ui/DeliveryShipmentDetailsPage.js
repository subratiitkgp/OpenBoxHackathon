'use strict';

import React, { Component } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, Button, Picker, CheckBox, Modal, ActivityIndicator } from 'react-native';
import { DeliveryAdapter} from '../data/DeliveryAdapter';
import { DeliveryStatus, DeliveryReason } from '../constants/DeliveryStatus';

export class DeliveryShipmentDetailsPage extends Component {
  static navigationOptions = {
    title: "Product Delivery"
  };
  
  constructor(props) {
    super(props);
    this.state={
        pickerValue: DeliveryStatus.OUT_FOR_DELIVERY.key,
        reasonPickerValue: undefined,
        loadingModalVisible: false,
        updateStatusButtonDisabled: true
    }
  }

  navigateToListPageAndSaveState(shipment, pickerValue, reasonPickerValue) {
    const status = pickerValue;
    const reason = reasonPickerValue;

    if (status === DeliveryStatus.DELIVERED.key) {
      if(!this.areAllChecksPassed(shipment)) {
        Alert.alert("Confirmation","All checks are not passed. Shipment cannot be delivered.");
        return;
      }
      this.props.navigation.navigate('SignaturePage', {shipment, status, reason});
      return;
    }

    shipment.status = status;
    shipment.reason = reason;
    DeliveryAdapter.syncDeliveryShipment(shipment);
    this.setState({loadingModalVisible: true});
    setTimeout(() => {
      this.setState({loadingModalVisible: false});
      this.props.navigation.pop(2);
      this.props.navigation.navigate("TaskPage");
    }, 2000);
  }

  disableOpenBoxButton(shipment) {
    if(shipment.isCustomerOBCheckRequired === true) {
      return false;
    }
    return true;
  }

  areAllChecksPassed(shipment) {
    const custOpenBoxChecks = shipment.CUSTOMER_OPENBOX_CHECKS;
    let flag = true;
    custOpenBoxChecks.forEach(check => {
      if(shipment.isCustomerOBCheckRequired && (check.checkResults === undefined || check.checkResults=== 'FAILED')) {
        flag =  false;
      }
    });
    return flag;
  }

  isAnyCheckPassedOrFailed(shipment) {
    const custOpenBoxChecks = shipment.CUSTOMER_OPENBOX_CHECKS;
    let flag = false;
    custOpenBoxChecks.forEach(check => {
      if(shipment.isCustomerOBCheckRequired && (check.checkResults === 'PASSED' || check.checkResults === 'FAILED')) {
        flag =  true;
      }
    });
    return flag;
  }

  getCheckIcon(tag, enabled) {
    if (enabled) return (
      <View>
        <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
        <Text>{tag}</Text>
      </View>
    );
    else return (
      <View>
        <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>
        <Text>{tag}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const shipmentId = navigation.getParam('shipmentId');
    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
    console.log("ankit rai");
    console.log(shipment);
    const pickerValue = this.state.pickerValue;
    const sellerOpenBox = shipment.isSellerOBCheckRequired;
    const custOpenBox = shipment.isCustomerOBCheckRequired;
    const sellerSC = shipment.isSellerSCCheckRequired;
    const custSC = shipment.isCustomerSCCheckRequired;

    let pickerItems = Object.entries(DeliveryStatus).map((key, value) => {
      return <Picker.Item key={key[1].key} value={key[1].key} label={key[1].value} />
    });
    let reasonPickerItems = Object.entries(DeliveryReason[pickerValue]).map((key, value) => {
      return <Picker.Item key={key[1].key} value={key[1].key} label={key[1].value} />
    });

    return(
        <View style={{flex: 1,
              justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Image source={{uri: shipment.imageUrl}}
                  style={{width: 100, height: 200}}
            />
          <View style={{flexDirection: 'column'}}>
               <Text style={{fontWeight: "bold",fontSize : 24}}>
                              {shipment.shipmentId}
               </Text>
               <Text style={{fontSize : 20}}>
                              {shipment.customerName}
               </Text>
                <Text style={{fontSize : 20}}>
                              {shipment.customerAddress1}
                </Text>
                <Text style={{fontSize : 20}}>
                              {shipment.customerCity}
                </Text>
                <Text style={{fontSize : 20}}>
                              {shipment.customerPincode}
                </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            {this.getCheckIcon("COB", custOpenBox)}
            {this.getCheckIcon("SOB", sellerOpenBox)}
          </View>
          
          {shipment.isCustomerOBCheckRequired === true ? 
              this.isAnyCheckPassedOrFailed(shipment) === false ? 
              <Button
              title="Start Open Box"
              onPress={() => {
                navigation.navigate("OpenBoxCheckPage", {shipmentId: shipmentId, checkId: 0});
              }}
              />
              :  
              this.areAllChecksPassed(shipment) === true ? 
              <Button
              title="Open Box Done" color="green"
              onPress={() => {
                navigation.navigate("OpenBoxCheckPage", {shipmentId: shipmentId, checkId: 0});
              }}
              />
              :
              <Button
              title="Re-Start Open Box"
              onPress={() => {
                navigation.navigate("OpenBoxCheckPage", {shipmentId: shipmentId, checkId: 0});
              }}
              />
            : null}

          <View style={{margin: 10, width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1}}>
            <Text>Delivery Status</Text>
            <Picker 
              mode={"dropdown"}
              style={{width:270, height: 50}} 
              selectedValue={this.state.pickerValue} 
              onValueChange={(itemValue, itemIndex) => {
                let isOFD = (itemValue===DeliveryStatus.OUT_FOR_DELIVERY.key);
                this.setState({ updateStatusButtonDisabled: isOFD, pickerValue: itemValue, reasonPickerValue: Object.entries(DeliveryReason[pickerValue])[0]})
              }}>
              
              {pickerItems}
            </Picker>
          </View>
          <View style={{margin: 10, width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1}}>
            <Text>Reason</Text>
            <Picker 
              mode={"dropdown"}
              style={{width:270, height: 50}} 
              selectedValue={this.state.reasonPickerValue} 
              onValueChange={(itemValue, itemIndex) => this.setState({reasonPickerValue: itemValue})}>
                {reasonPickerItems}
            </Picker>  
          </View>
        
          <Button
            title="Update Delivery Status" disabled={this.state.updateStatusButtonDisabled}
            onPress={() => Alert.alert("Confirmation","Are you sure you want to update this delivery status",
              [ 
                {text:"Ok", onPress:() => this.navigateToListPageAndSaveState(shipment, this.state.pickerValue, this.state.reasonPickerValue)},
                {text:"Cancel", onPress: () => console.log("Cancel pressed")}
              ])} 
          />
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {}}
            visible={this.state.loadingModalVisible}>
              <View style={{margin: 50, backgroundColor: 'lightblue', alignItems: 'center', borderWidth: 5}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Saving</Text>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
          </Modal>
        </View>
    );
  }
}
