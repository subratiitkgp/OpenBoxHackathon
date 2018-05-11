'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';

export class CheckTypeTriState extends Component {
  saveResultsAndNavigate(result) {
    if(result === "PASSED") {
      this.props.checkDetails.shipmentCheck.checkResults = "PASSED";
      OpenBoxCheckPage.navigateToNextPage(this.props.checkDetails.checkId, this.props.checkDetails.checksLength,
        this.props.navigation, this.props.checkDetails.shipment.shipmentId);    }
    else
    {
      this.props.checkDetails.shipmentCheck.checkResults = "FAILED";
      this.props.navigation.pop(this.props.checkDetails.checkId + 1);
    }
    DeliveryAdapter.syncDeliveryShipment(this.props.checkDetails.shipment);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <Button
        title="Correct"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => this.saveResultsAndNavigate("PASSED")},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}
        />
      <Button
        title="Incorrect"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => this.saveResultsAndNavigate("FAILED")},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
        <Button
        title="Incorrect but Accepted"
        onPress={() => Alert.alert("Confirmation", "Are you sure you want to go ahead with your choice?",
        [ 
          {text:"Ok", onPress: () => this.saveResultsAndNavigate("PASSED")},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
      </View>
      );
    }
}
