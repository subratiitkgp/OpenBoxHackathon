'use strict';

import React, { Component } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, Button, Picker, CheckBox} from 'react-native';
import { DeliveryAdapter} from '../data/DeliveryAdapter';
import { DeliveryStatus, DeliveryReason } from '../constants/DeliveryStatus';

export class DeliveryShipmentDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state={
        pickerValue: DeliveryStatus.OUT_FOR_DELIVERY.key,
        reasonPickerValue: undefined
    }
  }

  navigateToListPageAndSaveState(shipment, pickerValue, reasonPickerValue) {
    const status = pickerValue;
    const reason = reasonPickerValue;

    if (status === DeliveryStatus.DELIVERED.key) {
      this.props.navigation.navigate('SignaturePage', {shipment, status, reason});
      return;
    }

    shipment.status = status;
    shipment.reason = reason;
    this.props.navigation.pop();
  }

  render() {
    const { navigation } = this.props;
    const shipmentId = navigation.getParam('shipmentId');
    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
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
            <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg'}}
                  style={{width: 100, height: 200}}
            />
          <Text>
            {shipmentId}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {custOpenBox===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"COB"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {sellerOpenBox===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"SOB"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {custSC===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"CSC"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {sellerSC===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"SSC"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}   
          </View>
          <Button
          title="Start Open Box"
          onPress={() => {
            navigation.navigate("OpenBoxCheckPage", {shipmentId: shipmentId, checkId: 0});
          }}
        />
        <Picker 
        mode={"dropdown"}
        style={{width:270, height: 50}} 
        selectedValue={this.state.pickerValue} 
        onValueChange={(itemValue, itemIndex) => this.setState({pickerValue: itemValue, reasonPickerValue: Object.entries(DeliveryReason[pickerValue])[0]})}>
        {pickerItems}
        </Picker>
        <Picker 
        mode={"dropdown"}
        style={{width:270, height: 50}} 
        selectedValue={this.state.reasonPickerValue} 
        onValueChange={(itemValue, itemIndex) => this.setState({reasonPickerValue: itemValue})}>
        {reasonPickerItems}
        </Picker>  
        
        <Button
              title="Update Delivery Status"
              onPress={() => Alert.alert("Confirmation","Are you sure you want to update this delivery status",
              [ 
                {text:"Ok", onPress:() => this.navigateToListPageAndSaveState(shipment, this.state.pickerValue, this.state.reasonPickerValue)},
                {text:"Cancel", onPress: () => console.log("Cancel pressed")}
              ])} 
          />
        </View>
    );
  }
}
