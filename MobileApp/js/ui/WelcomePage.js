'use strict';

import React, { Component } from 'react';
import { Alert, View, Button, Picker } from 'react-native';
import { Store } from '../data/Store';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryAdapter } from '../data/DeliveryAdapter';

import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import {CheckTypeSingleChoice} from './CheckTypeSingleChoice';

const shipmentCount = 1;

export class WelcomePage extends Component {
  constructor(props) {
    super(props);
    // Store.init([ShipmentStore.getShipmentSchema()]);
    // this.deleteAllShipments();
    DeliveryAdapter.initializeDeliveryShipments()
    this.state = {
      location: 1
    }
  }

  printShipments() {
    console.log(ShipmentStore.getAllShipments());
  }

  getDummyShipment(shipmentCount) {
    return (DeliveryAdapter.fetchDeliveryShipments())[shipmentCount];
  }

  createNewShipment() {
    const shipment = this.getDummyShipment(shipmentCount);
    ShipmentStore.saveShipment(shipment);
    shipmentCount = shipmentCount + 1;
    Alert.alert("Created", "Created");
  }

  updateShipment() {
    const shipments = ShipmentStore.getAllShipments();
    let shipment = shipments[shipments.length - 1];
    shipment.status = "DELIVERED";
    ShipmentStore.saveShipment(shipment);
    Alert.alert("Updated", "Updated");
  }

  deleteAllShipments() {
    ShipmentStore.deleteAllShipments();
    shipmentCount = 1;
    Alert.alert("Deleted", "Deleted");
  }

  render1() {
    return (
      <View style={{flex: 1, borderWidth: 1}}>
      <CheckTypeSingleChoice shipmentId={"ABC"} checkId={0} navigation={this.props.navigation}/>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
      <Picker
        style={{width: 200}}
        selectedValue={this.state.location}
        onValueChange={loc => this.setState({location: loc})}>
        <Picker.Item label="Location 1" value="1" /> 
        <Picker.Item label="Location 2" value="2" />
        <Picker.Item label="Location 3" value="3" />
       </Picker>
        <Button
          title="Facility Manager"
          onPress={() => navigate('TaskPage', { name: 'Jane' })}
        />
        <Button
          title="Delivery Executive"
          onPress={() => navigate('TaskPage', { name: 'Jane' })}
        />
        <Button
          title="Print Shipments"
          onPress={() => this.printShipments()}
        />
        <Button
          title="Create Shipment"
          onPress={() => this.createNewShipment()}
        />
        <Button
          title="Update Shipment"
          onPress={() => this.updateShipment()}
        />  
        <Button
          title="Delete Shipments"
          onPress={() => this.deleteAllShipments()}
        />
      </View>
    )
  }
}