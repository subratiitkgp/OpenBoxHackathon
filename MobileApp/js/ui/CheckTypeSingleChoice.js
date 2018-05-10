'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';

export class CheckTypeSingleChoice extends Component {

  constructor(props) {
        super(props);
        const shipmentId = this.props.shipmentId;
        let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);

        // let shipment = ShipmentStore.getShipment(shipmentId);
        const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);
        const checks = shipment[checkScenario];
        const checkId = this.props.checkId;
        const check = checks[checkId];
        const checksLength = OpenBoxChecks[shipment.category].length;

        const checkName = OpenBoxChecks[shipment.category][checkId].checkName;
        const checkQuestionHeader = CheckNames[checkName].value;

        this.localProps = {
              checksLength: OpenBoxChecks[shipment.category].length,
              checkQuestionHeader,
              checkData: check.checkData,
              checkResults: check.checkResults,
              shipment,
              check
            };
  }

  saveResultsAndNavigate(result) {
        if(result === "PASSED") {
          this.localProps.check.checkResults = "PASSED";
          console.log(this.localProps.shipment);
          this.navigateToNextPage(this.props.shipmentId,this.props.checkId, this.localProps.checksLength)
        }
        else
        {
          this.localProps.check.checkResults = "FAILED";
          this.props.navigation.pop(checkId+1);
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

  
    

    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
      <Text>
        {this.localProps.checkQuestionHeader}
      </Text>
      <Button
        title="Yes"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => this.saveResultsAndNavigate("PASSED")},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}
        />
      <Button
        title="No"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => this.saveResultsAndNavigate("FAILED")},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
      </View>
      );
    }
}