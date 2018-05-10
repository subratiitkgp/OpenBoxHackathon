'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert, TextInput } from 'react-native';
import { ShipmentStore } from '../data/ShipmentStore';
import { OpenBoxChecks, CheckTypes } from '../constants/OpenBoxChecks';
import { DeliveryShipmentDetailsPage } from './DeliveryShipmentDetailsPage';


export class CheckTypeBooleanWithText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    }
  }

  getDummyShipment(shipmentId) {
    return {
      shipmentId,
      category: "MOBILE",
      
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
    const shipmentId = this.props.shipmentId;
    // let shipment = ShipmentStore.getShipment(shipmentId);
    let shipment = this.getDummyShipment(shipmentId);
    const checkId = this.props.checkId;
    const checksLength = OpenBoxChecks[shipment.category].length;
    const staticCheckValue = OpenBoxChecks[shipment.category][checkId].value;
    
    return (
      <View style={{flex: 1, justifyContent: 'space-between', margin: 100}}>
      <Text>
        {staticCheckValue}
      </Text>
      <Button
        title="Correct"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => this.navigateToNextPage(shipmentId, checkId, checksLength)},
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
                {text:"Ok", onPress:() => this.props.navigation.pop(checkId+1)},
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
