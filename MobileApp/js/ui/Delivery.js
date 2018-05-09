'use strict';

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export class Delivery extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('DeliveryShipmentDetailsPage', {shipmentId: this.props.shipmentId})}>
        <View style={{flex: 1, flexDirection: 'row',
                      justifyContent: 'space-evenly', alignItems: 'center',
                      margin: 10}}>
          <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg'}}
                style={{width: 100, height: 200}}
          />
          <Text>
            {this.props.shipmentId}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
