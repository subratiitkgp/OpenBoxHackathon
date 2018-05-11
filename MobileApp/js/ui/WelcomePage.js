'use strict';

import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';
import { Store } from '../data/Store';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryAdapter } from '../data/DeliveryAdapter';

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
    DeliveryAdapter.setDeliveryShipments(shipments);
  }

  printShipments() {
    console.log(DeliveryAdapter.fetchDeliveryShipments());
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
    // Alert.alert("Deleted", "Deleted");
  }

  render1() {
    const { navigate } = this.props.navigation;
    const shipment = (ShipmentStore.getAllShipments())[0];
    const status = DeliveryStatus.DELIVERED.key;
    const reason = undefined;

    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
        <Button
          title="Delivery Executive"
          onPress={() => navigate('SignaturePage', {shipment, status, reason})}
        />
        <Button
          title="Reinitialize Shipments"
          onPress={() => {
            ShipmentStore.deleteAllShipments();
            const shipments = DeliveryAdapter.initializeDeliveryShipments();
            ShipmentStore.saveAllShipments(shipments);
            DeliveryAdapter.setDeliveryShipments(shipments);
            Alert.alert("Info", "Shipments have been reinitialized");
          }}
        />
        <Button
          title="Print Shipments"
          onPress={() => this.printShipments()}
        />
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
        <Button
          title="Delivery Executive"
          onPress={() => navigate('TaskPage', { name: 'Jane' })}
        />
        <Button
          title="Reinitialize Shipments"
          onPress={() => {
            ShipmentStore.deleteAllShipments();
            const shipments = DeliveryAdapter.initializeDeliveryShipments();
            ShipmentStore.saveAllShipments(shipments);
            DeliveryAdapter.setDeliveryShipments(shipments);
            Alert.alert("Info", "Shipments have been reinitialized");
          }}
        />
        <Button
          title="Print Shipments"
          onPress={() => this.printShipments()}
        />
      </View>
    )
  }
}
