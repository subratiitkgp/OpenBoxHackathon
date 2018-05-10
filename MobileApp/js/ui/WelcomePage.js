'use strict';

import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';
import { Store } from '../data/Store';
import { ShipmentStore } from '../data/ShipmentStore';

import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';

import { Test } from './Test';

const shipmentCount = 1;

export class WelcomePage extends Component {
  constructor(props) {
    super(props);
    Store.init([ShipmentStore.getShipmentSchema()]);
    // this.deleteAllShipments();
  }

  printShipments() {
    console.log(ShipmentStore.getAllShipments());
  }

  createNewShipment() {
    const shipmentId = "DELIVERY" + (100000 + shipmentCount);
    const shipment = {
      shipmentId,
      status: "OFD",
      reason: ""
    };

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
      <CheckTypeMultiChoice shipmentId={"ABC"} checkId={0}/>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
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