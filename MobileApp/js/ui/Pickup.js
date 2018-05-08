'use strict';

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class Pickup extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row',
                    justifyContent: 'space-evenly', alignItems: 'center',
                    margin: 10}}>
        <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81drtEjsU8L._SX679_.jpg'}}
               style={{width: 200, height: 130}}
        />
        <Text>
          {this.props.shipmentId}
        </Text>
      </View>
    );
  }
}