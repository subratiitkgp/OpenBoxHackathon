'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';

export class CheckTypeBoolean extends Component {
  constructor(props) {
      super(props);

      const shipmentId = this.props.shipmentId;
      let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
      const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

      const checks = shipment[checkScenario];
      const checkId = this.props.checkId;
      const check = checks[checkId];
      const checkData = check.checkData;
      const checkResults = check.checkResults;

      const checksLength = OpenBoxChecks[shipment.category].length;
      
      const checkName = OpenBoxChecks[shipment.category][checkId].checkName;
      const checkQuestionHeader = CheckNames[checkName].value;

      this.localProps = {
        checksLength: OpenBoxChecks[shipment.category].length,
        checkQuestionHeader,
        checkResults: check.checkResults,
        check,
        shipment
      };
  }

  isLastCheck(checkId, checksLength) {
     if(checkId===checksLength-1) {
       return true;
     }
     else return false;
  }

  navigateToNextPage(shipmentId, checkId, checksLength) {
    if(!this.isLastCheck(checkId, checksLength)) {
        this.props.navigation.push('OpenBoxCheckPage', {shipmentId: this.props.shipmentId, checkId: this.props.checkId+1})
      } else {
        Alert.alert("Info", "All checks have been completed.", [
          {text:"Ok", onPress: () => this.props.navigation.pop(checkId+1)},
        ])
      }
  }
  saveResultsAndNavigate(result) {
    DeliveryAdapter.syncDeliveryShipment(this.localProps.shipment);
    if(result === "PASSED") {
      this.localProps.check.checkResults = "PASSED";
      this.navigateToNextPage(this.shipmentId, this.props.checkId, this.localProps.checksLength)
    }
    else
    {
      this.localProps.check.checkResults = "FAILED";
      this.props.navigation.pop(this.props.checkId+1)
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.localProps.checkQuestionHeader}
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
      </View>
      )
    }
}