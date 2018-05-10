'use strict';

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, CheckBox } from 'react-native';

export class Delivery extends Component {
  getCheckIcon(tag, enabled) {
    if (enabled) return (
      <View>
        <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
        <Text>{tag}</Text>
      </View>
    );
    else return (
      <View>
        <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>
        <Text>{tag}</Text>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const shipment = this.props.shipment;
    const sellerOpenBox = shipment.isSellerOBCheckRequired;
    const custOpenBox = shipment.isCustomerOBCheckRequired;
    const sellerSC = shipment.isSellerSCCheckRequired;
    const custSC = shipment.isCustomerSCCheckRequired;

    return (
      <TouchableOpacity onPress={() => navigate('DeliveryShipmentDetailsPage', {shipmentId: shipment.shipmentId})}>
        <View style={{flex: 1, flexDirection: 'row',
                      justifyContent: 'space-evenly', alignItems: 'center',
                      margin: 10}}>
          <Image source={{uri: shipment.imageUrl}}
                style={{width: 100, height: 200}}
          />
          <View style={{flexDirection: 'column'}}>
          <Text>
            {shipment.shipmentId}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {this.getCheckIcon("COB", custOpenBox)}
            {this.getCheckIcon("SOB", sellerOpenBox)}
          </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
