'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryShipmentDetailsPage } from './DeliveryShipmentDetailsPage';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';

export class CheckTypeBooleanWithText extends Component {
  constructor(props) {
    super(props);
    this.state = {showTextInput: false}
  }
  
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <Button
        title="Correct"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)},
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
                {text:"Ok", onPress:() => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "FAILED", this.props.navigation)},
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
