'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes } from '../constants/OpenBoxChecks';


export class CheckTypeMultiChoice extends Component {


  getDummyShipment(shipmentId) {
    return {
      shipmentId,
      category: "MOBILE",
      
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
        this.props.navigation.push('DeliveryShipmentsDetailPage', {shipmentId: shipmentId, checkId: checkId})
      }
  }


  render() {
    console.log("back to boolean with text");
    const { push } = this.props.navigation;
    const shipmentId = this.props.shipmentId;
    // let shipment = ShipmentStore.getShipment(shipmentId);
    let shipment = this.getDummyShipment(shipmentId);
    const openBoxChecks = shipment.openBoxChecks;
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
          {text:"Ok", onPress:() => this.navigateToNextPage(shipmentId, checkId, checksLength)},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
      </View>
      )
    }
}