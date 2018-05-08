'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Pickup } from './Pickup';

export class Pickups extends Component {
  renderShipment(shipmentId) {
    return (
      <Pickup shipmentId={shipmentId}/>
    );
  }

  getShipmentIds() {
    let array = [];
    for (let i = 1; i <= 100; ++i) {
      let shipmentId = "PICKUP" + (100000 + i);
      array.push({key: i.toString(), shipmentId});
    }
    return array;
  }

  render() {
    const shipmentIds = this.getShipmentIds();

    return (
      <View>
        <FlatList
          removeClippedSubviews={true}
          data={shipmentIds}
          keyExtractor={item => item.key}
          initialNumToRender={1}
          renderItem={({item}) => this.renderShipment(item.shipmentId)}
        />
      </View>
    )
  }
}