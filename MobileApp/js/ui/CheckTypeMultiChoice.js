'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, CheckBox, FlatList } from 'react-native';
import { ShipmentType } from '../constants/ShipmentType';
import { ShipmentStatus, DeliveryStatus } from '../constants/DeliveryStatus';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';
import { SmartCheckPage } from './SmartCheckPage';

export class CheckTypeMultiChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {checkBoxValues: Array(this.props.checkDetails.shipmentCheck.checkData.length).fill(false)};
  }

  verifyMandatoryChecksSelected() {
    let i;
    for(i = 0 ; i < this.props.checkDetails.shipmentCheck.checkData.length ; i++) {
      if(this.props.checkDetails.shipmentCheck.checkData[i].required === true && this.state.checkBoxValues[i] === false) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between',margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <FlatList style={{borderWidth: 1}}
        removeClippedSubviews={true}
        data={this.props.checkDetails.shipmentCheck.checkData}
        keyExtractor={(checkData) => checkData.key}
        initialNumToRender={1}
        renderItem={(checkData, index) => {
          return (
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <CheckBox value={this.state.checkBoxValues[checkData.index]} onValueChange={(value) => this.changeCheckboxState(value, checkData.index)} />
              <Text style = {{fontSize : 25,margin:10}}>{checkData.item.value}</Text>
              {checkData.item.required===true ?
                <Text style = {{fontSize : 25,margin:10}}>(Required)</Text>
              : null}
            </View>
          )
        }}
      />

      <View style={{margin: 10}}>
        <Button style={{margin: 100, padding: 100}}
          title="Yes"
          onPress={() => {
            let areMandatoryChecksSelected = this.verifyMandatoryChecksSelected();
            if(areMandatoryChecksSelected === false) {
              Alert.alert("Alert", "All mandatory checks need to be selected for this product.","")
              return;
            }
            Alert.alert("Confirmation", "Are you sure your check is passed?",
            [
              {text:"Ok", onPress:() => {
                (this.props.checkDetails.shipment.type === ShipmentType.DELIVERY.key) ? 
                  OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)
                :
                  SmartCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)
                }
              },
              {text:"Cancel", onPress: () => console.log("Cancel pressed")}
            ])}
          }
          />
      </View>  
      <View style={{margin: 10}}>
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
            {text:"Cancel", onPress: () => console.log("Cancel pressed")}
          ])}      
        />
      </View>
      </View>
    );
  }

  changeCheckboxState(value, index) {
    let checkBoxValues = this.state.checkBoxValues;
    checkBoxValues[index] = value;
    this.setState(checkBoxValues);
  }
}
