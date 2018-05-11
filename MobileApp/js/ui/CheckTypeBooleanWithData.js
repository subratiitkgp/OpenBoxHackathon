'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, Image } from 'react-native';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';
import { SmartCheckPage } from './SmartCheckPage';
import { ShipmentType } from '../constants/ShipmentType';

export class CheckTypeBooleanWithData extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{this.props.checkDetails.shipmentCheck.checkData.displayValue}</Text>
      <Button
        title="Yes"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => {
            (this.props.checkDetails.shipment.type === ShipmentType.DELIVERY.key) ? 
              OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)
            :
              SmartCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)
            }
          },
          {text:"Cancel", onPress: () => {}}
        ])}
        />
      <Button
        title="No"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => {
            (this.props.checkDetails.shipment.type === ShipmentType.DELIVERY.key) ? 
              OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "FAILED", this.props.navigation)
            :
              SmartCheckPage.saveResultsAndNavigate(this.props.checkDetails, "FAILED", this.props.navigation)
            }
          },
          {text:"Cancel", onPress: () => {}}
        ])}      
        />
      </View>
      )
    }
}
