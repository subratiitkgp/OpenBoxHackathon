'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Pickup } from './Pickup';
import { PickupAdapter } from '../data/PickupAdapter';

export class Pickups extends Component {
  renderShipment(shipmentId) {
    return (
      <Pickup shipmentId={shipmentId}/>
    );
  }

  render() {
    const shipments = PickupAdapter.getPickupShipments();

    return (
      <View>
        <FlatList
          removeClippedSubviews={true}
          data={shipments}
          keyExtractor={(shipment) => shipment.key}
          initialNumToRender={1}
          renderItem={(shipment) => this.renderShipment(shipment.item.shipmentId)}
        />
      </View>
    )
  }
}
