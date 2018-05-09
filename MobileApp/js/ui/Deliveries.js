'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Delivery } from './Delivery';
import { DeliveryAdapter } from '../data/DeliveryAdapter';

export class Deliveries extends Component {
  renderShipment(shipmentId) {
    return (
      <Delivery shipmentId={shipmentId}/>
    );
  }

  render() {
    const shipments = DeliveryAdapter.getDeliveryShipments();

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
