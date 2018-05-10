'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, CheckBox, FlatList } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { Category, OpenBoxChecks, CheckNames, CheckTypes } from '../constants/OpenBoxChecks';
import { CheckUtil } from '../util/CheckUtil';
import { ShipmentType } from '../constants/ShipmentType';
import { ShipmentStatus, DeliveryStatus } from '../constants/DeliveryStatus';
import { DeliveryAdapter } from '../data/DeliveryAdapter';

export class CheckTypeMultiChoice extends Component {
  constructor(props) {
    super(props);

    const shipmentId = this.props.shipmentId;
    // let shipment = ShipmentStore.getShipment(shipmentId);
    let shipment = this.getDummyShipment1(shipmentId);
    const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

    const checks = shipment[checkScenario];
    const checkId = this.props.checkId;
    const check = checks[checkId];

    const checkData = check.checkData;
    const checkResults = check.checkResults;
    
    this.localProps = {
      checksLength: OpenBoxChecks[shipment.category].length,
      checkQuestionHeader: OpenBoxChecks[shipment.category][checkId].value,
      checkData: check.checkData,
      checkResults: check.checkResults
    };

    this.state = {
      checkBoxValues: Array(this.localProps.checkData.length).fill(false)
    };
  }

  render() {  
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Text>
        {this.localProps.checkQuestionHeader}
      </Text>
      <FlatList style={{borderWidth: 1}}
        removeClippedSubviews={true}
        data={this.localProps.checkData}
        keyExtractor={(checkData) => checkData.key}
        initialNumToRender={1}
        renderItem={(checkData, index) => {
          console.log(checkData.index);
          return (
            <View style={{flexDirection: 'row'}}>
              <CheckBox value={this.state.checkBoxValues[checkData.index]} onValueChange={(value) => this.changeCheckboxState(value, checkData.index)} />
              <Text>{checkData.item.value}</Text>
            </View>
          )
        }}
      />

      <View style={{margin: 10}}>
        <Button style={{margin: 100, padding: 100}}
          title="Yes"
          onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
          [ 
            {text:"Ok", onPress: () => this.navigateToNextPage(this.props.shipmentId, 
              this.props.checkId, this.localProps.checksLength)},
            {text:"Cancel", onPress: () => console.log("Cancel pressed")}
          ])}
          />
      </View>  
      <View style={{margin: 10}}>
        <Button
          title="No"
          onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
          [ 
            {text:"Ok", onPress:() => this.props.navigation.pop(checkId+1)},
            {text:"Cancel", onPress: () => console.log("Cancel pressed")}
          ])}      
        />
      </View>
      </View>
    );
  }

  saveResultsAndNavigate() {
    checkResults = "Yes"
    this.navigateToNextPage(this.props.shipmentId,
                  this.props.checkId, this.localProps.checksLength)

  }

  changeCheckboxState(value, index) {
    let checkBoxValues = this.state.checkBoxValues;
    checkBoxValues[index] = value;
    this.setState(checkBoxValues);
  }

  getDummyShipment1(shipmentId) {
    return (DeliveryAdapter.fetchDeliveryShipments())[0];
  }

  getDummyShipment(shipmentId) {
    return {
      shipmentId,
      type: ShipmentType.DELIVERY.key,
      category: Category.MOBILE.key,
      status: DeliveryStatus.OUT_FOR_DELIVERY,
      CUSTOMER_OPENBOX: [
        {
          checkName: CheckNames.CONDITION,
          checkData: [
            {
              key: "A",
              value: "A"
            },
            {
              key: "B",
              value: "B"
            },
            {
              key: "C",
              value: "C"
            }
          ],
          checkResults: {
          }
        }
      ]
    }
  }

  isLastCheck(checkId, checksLength) {
    if(checkId===checksLength-1) {
      return true;
    }
    else return false;
  }

  navigateToNextPage(shipmentId, checkId, checksLength) {
    if(!this.isLastCheck(checkId, checksLength)) {
      this.props.navigation.push('OpenBoxCheckPage', {shipmentId: shipmentId, checkId: checkId+1})
    } else {
      this.props.navigation.pop(checkId+1)
    }
  }
}
