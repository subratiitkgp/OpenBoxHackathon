'use strict';

import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';
import { Store } from '../data/Store';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { PickupAdapter } from '../data/PickupAdapter';

import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import {CheckTypeSingleChoice} from './CheckTypeSingleChoice';
import {CheckTypeTriState} from './CheckTypeTriState';
import {CheckTypeBooleanWithText} from './CheckTypeBooleanWithText';
import { DeliveryStatus, DeliveryReason } from '../constants/DeliveryStatus';

const shipmentCount = 1;

export class WelcomePage extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  constructor(props) {
    super(props);
    Store.init([ShipmentStore.getShipmentSchema()]);
    const shipments = ShipmentStore.getAllShipments();
  }

  printShipments() {
    console.log(ShipmentStore.getAllShipments().length);
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
    // Alert.alert("Deleted", "Deleted");
  }

  initializeAllShipments() {
    ShipmentStore.deleteAllShipments();
    const shipments = DeliveryAdapter.initializeDeliveryShipments();
    ShipmentStore.saveAllShipments(shipments);
    const pickupShipments = PickupAdapter.initializePickupShipments();
    ShipmentStore.saveAllShipments(pickupShipments);
    Alert.alert("Info", "Shipments have been reinitialized");
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
        <Button
          title="Field Associate"
          onPress={() => navigate('TaskPage', { name: 'Jane' })}
        />
        <Button
          title="Get All Shipments"
          onPress={() => this.initializeAllShipments()}
        />
      </View>
    )
  }
}
