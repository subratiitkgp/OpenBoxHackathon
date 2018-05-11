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
    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
    const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

    const checks = shipment[checkScenario];
    const checkId = this.props.checkId;
    const check = checks[checkId];

    console.log()

    const checkData = check.checkData;
    const checkResults = check.checkResults;

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
            {text:"Ok", onPress: () => this.saveResultsAndNavigate("PASSED")},
            {text:"Cancel", onPress: () => console.log("Cancel pressed")}
          ])}
          />
      </View>  
      <View style={{margin: 10}}>
        <Button
          title="No"
          onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
          [ 
            {text:"Ok", onPress:() => this.saveResultsAndNavigate("FAILED")},
            {text:"Cancel", onPress: () => console.log("Cancel pressed")}
          ])}      
        />
      </View>
      </View>
    );
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

  changeCheckboxState(value, index) {
    let checkBoxValues = this.state.checkBoxValues;
    checkBoxValues[index] = value;
    this.setState(checkBoxValues);
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
