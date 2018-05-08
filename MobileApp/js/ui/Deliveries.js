'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Delivery } from './Delivery';

export class Deliveries extends Component {
  renderShipment(shipmentId) {
    return (
      <Delivery shipmentId={shipmentId}/>
    );
  }

  getShipmentIds() {
    let array = [];
    for (let i = 1; i <= 100; ++i) {
      let shipmentId = "DELIVERY" + (100000 + i);
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