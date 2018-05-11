'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Delivery } from './Delivery';
import { ShipmentStore } from '../data/ShipmentStore';
import { DeliveryStatus } from '../constants/DeliveryStatus';
import { ShipmentType } from '../constants/ShipmentType';

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
    let shipments = ShipmentStore.getAllShipments();
    shipments=shipments.filter(shipment => 
      shipment.status===DeliveryStatus.OUT_FOR_DELIVERY.key
      && shipment.type===ShipmentType.DELIVERY.key)
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
