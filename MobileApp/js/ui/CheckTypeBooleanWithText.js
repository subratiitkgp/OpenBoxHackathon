'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { DeliveryShipmentDetailsPage } from './DeliveryShipmentDetailsPage';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';

export class CheckTypeBooleanWithText extends Component {

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

          this.state = {
                showTextInput: false
              }
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
  saveResultsAndNavigate(result) {
        if(result === "PASSED") {
          this.localProps.check.checkResults = "PASSED";
          console.log(this.localProps.shipment);
          this.navigateToNextPage(this.props.shipmentId,this.localProps.checkId, this.localProps.checksLength)
        }
        else
        {
          this.localProps.check.checkResults = "FAILED";
          this.props.navigation.pop(this.localProps.checkId+1);
        }
  }


  render() {

    
    return (
      <View style={{flex: 1, justifyContent: 'space-between', margin: 50}}>
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
        onPress={() => Alert.alert("Confirmation", "Please enter the product category you actually received",
        [ 
          {text:"Ok", onPress: () => this.setState({showTextInput: true})},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])} 
        />
        <View>
        {this.state.showTextInput===true ? 
          <View>
            <TextInput style={{height: 50, margin: 20}} placeholder={'What was the received product?'}/>
            <Button
              title="Save"
              onPress={() => Alert.alert("Confirmation","This will take you back to main page.",
              [ 
                {text:"Ok", onPress:() => this.saveResultsAndNavigate("FAILED")},
                {text:"Cancel", onPress: () => console.log("Cancel pressed")}
              ])} 
            />
          </View>
          :null}
        </View>
      </View>
      )
    }



  }
