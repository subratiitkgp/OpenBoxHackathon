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
       <TouchableOpacity onPress={() => navigation.navigate('test')}>
      <View style={{flex: 1, flexDirection: 'row',
            justifyContent: 'space-evenly', alignItems: 'center',
            margin: 10}}>
        <Image source={{uri: shipment.imageUrl}}
               style={{width: 200, height: 130}}
        />
        <Text>
          {shipmentId}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }
}