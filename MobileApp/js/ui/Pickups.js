'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Pickup } from './Pickup';
import { ShipmentStore } from '../data/ShipmentStore';
import { PickupStatus } from '../constants/PickupStatus';
import { ShipmentType } from '../constants/ShipmentType';

export class Pickups extends Component {
  constructor(props) {
    super(props);
  }

  renderShipment(shipment) {
      return (
        <Pickup shipment={shipment} navigation={this.props.navigation}/>
      );
  }

  render() {
    let shipments = ShipmentStore.getAllShipments();
    shipments=shipments.filter(shipment => 
      shipment.status===PickupStatus.OUT_FOR_PICKUP.key
      && shipment.type===ShipmentType.PICKUP.key)
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
