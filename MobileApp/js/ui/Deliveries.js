'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Delivery } from './Delivery';
import { DeliveryAdapter } from '../data/DeliveryAdapter';

export class Deliveries extends Component {
  constructor(props) {
    super(props);
  }

  renderShipment(shipmentId) {
    return (
      <Delivery shipmentId={shipmentId} navigation={this.props.navigation}/>
    );
  }

  render() {
    const shipments = DeliveryAdapter.fetchDeliveryShipments();

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
