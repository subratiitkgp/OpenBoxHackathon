'use strict';

import React, { Component } from 'react';
import { Alert, Text, View, Image, TouchableOpacity } from 'react-native';
import { PickupAdapter} from '../data/PickupAdapter';

export class PickupShipmentDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const shipmentId = navigation.getParam('shipmentId');
    let shipment = PickupAdapter.getPickupShipment(shipmentId);

    return (
      <View style={{flex: 1, flexDirection: 'row',
            justifyContent: 'space-evenly', alignItems: 'center',
            margin: 10}}>
        <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81drtEjsU8L._SX679_.jpg'}}
               style={{width: 200, height: 130}}
        />
        <Text>
          {shipmentId}
        </Text>
      </View>
    );
  }
}