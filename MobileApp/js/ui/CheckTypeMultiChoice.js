'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { Category, OpenBoxChecks, CheckNames, CheckTypes } from '../constants/OpenBoxChecks';
import { CheckUtil } from '../util/CheckUtil';
import { ShipmentType } from '../constants/ShipmentType';
import { ShipmentStatus, DeliveryStatus } from '../constants/DeliveryStatus';

export class CheckTypeMultiChoice extends Component {
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
            "A", "B", "C"
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

  render() {
    const shipmentId = this.props.shipmentId;
    // let shipment = ShipmentStore.getShipment(shipmentId);
    let shipment = this.getDummyShipment(shipmentId);
    const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

    const checks = shipment[checkScenario];

    const checkId = this.props.checkId;
    const checksLength = OpenBoxChecks[shipment.category].length;
    const staticCheckValue = OpenBoxChecks[shipment.category][checkId].value;
  
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
      <Text>
        {staticCheckValue}
      </Text>
      <Button
        title="Yes"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => this.navigateToNextPage(shipmentId, checkId, checksLength)},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}
        />
      <Button
        title="No"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => this.props.navigation.pop(checkId+1)},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
      </View>
      )
    }
}
