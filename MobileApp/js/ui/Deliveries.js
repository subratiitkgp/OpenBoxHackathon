'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Delivery } from './Delivery';
import { DeliveryAdapter } from '../data/DeliveryAdapter';
import { DeliveryStatus } from '../constants/DeliveryStatus';

export class Deliveries extends Component {
  constructor(props) {
    super(props);
  }

  renderShipment(shipment) {
      return (
        <Delivery shipment={shipment} navigation={this.props.navigation}/>
      );
  }

  render() {
    let shipments = DeliveryAdapter.fetchDeliveryShipments();
    shipments=shipments.filter(shipment => shipment.status===DeliveryStatus.OUT_FOR_DELIVERY.key)
    return (
      <View>
        <FlatList
          removeClippedSubviews={true}
          data={shipments}
          keyExtractor={(shipment) => shipment.key}
          initialNumToRender={1}
          renderItem={(shipment) => this.renderShipment(shipment.item)}
        />
      </View>
    )
  }
}
