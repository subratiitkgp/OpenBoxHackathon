'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes } from '../constants/OpenBoxChecks';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';

export class CheckTypeBoolean extends Component {

  constructor(props) {
      super(props);

      const shipmentId = this.props.shipmentId;
      let shipment = this.getDummyShipment(shipmentId);
      const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

      const checks = shipment[checkScenario];
      const checkId = this.props.checkId;
      const check = checks[checkId];
      const checkData = check.checkData;
      const checkResults = check.checkResults;

      const checksLength = OpenBoxChecks[shipment.category].length;
      const checkQuestionHeader = OpenBoxChecks[shipment.category][checkId].value;

      this.localProps = {
        checksLength: OpenBoxChecks[shipment.category].length,
        checkQuestionHeader: OpenBoxChecks[shipment.category][checkId].value,
        checkResults: check.checkResults,
        check
      };
  }

  getDummyShipment(shipmentId) {
    return (DeliveryAdapter.fetchDeliveryShipments())[0];
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
        this.props.navigation.pop(checkId+1)
      }
  }
  saveResultsAndNavigate(result) {
    if(result === "PASSED") {
      this.localProps.check.checkResults = "PASSED";
      this.navigateToNextPage(this.shipmentId, this.checkId, this.checksLength)
    }
    else
    {
      this.localProps.check.checkResults = "FAILED";
      this.props.navigation.pop(checkId+1)
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
      <Text>
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