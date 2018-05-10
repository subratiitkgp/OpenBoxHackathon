'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes } from '../constants/OpenBoxChecks';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';


export class CheckTypeTriState extends Component {

  constructor(props) {
          super(props);
          const shipmentId = this.props.shipmentId;
          let shipment = this.getDummyShipment1(shipmentId);

          // let shipment = ShipmentStore.getShipment(shipmentId);
          const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);
          const checks = shipment[checkScenario];
          const checkId = this.props.checkId;
          const check = checks[checkId];
          const checksLength = OpenBoxChecks[shipment.category].length;
          const checkQuestionHeader = OpenBoxChecks[shipment.category][checkId].value;

          this.localProps = {
                checksLength: OpenBoxChecks[shipment.category].length,
                checkQuestionHeader,
                checkData: check.checkData,
                checkResults: check.checkResults,
                shipment,
                check,
                checkId
              };
  }

  getDummyShipment1(shipmentId) {
        return (DeliveryAdapter.fetchDeliveryShipments())[0];
  }

  getDummyShipment(shipmentId) {
    return {
      shipmentId,
      category: "MOBILE",
      
    }
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
            console.log(this.localProps.checkId+1);
            this.props.navigation.pop(this.localProps.checkId+1);
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