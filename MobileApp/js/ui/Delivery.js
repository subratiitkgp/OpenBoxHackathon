'use strict';

import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, CheckBox } from 'react-native';

export class Delivery extends Component {
  getCheckIcon(tag, enabled) {
    if (enabled) return (
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5, width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
        <Text>{tag}</Text>
      </View>
    );
    else return (
      <View>
        <View style={{margin: 5, width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>
        <Text>{tag}</Text>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const shipment = this.props.shipment;
    const sellerOpenBox = shipment.isSellerOBCheckRequired;
    const custOpenBox = shipment.isCustomerOBCheckRequired;

    return (
      <TouchableWithoutFeedback onPress={() => navigate('DeliveryShipmentDetailsPage', {shipmentId: shipment.shipmentId})}>
        <View style={{flex: 1, flexDirection: 'row',
                      justifyContent: 'space-evenly', alignItems: 'center',
                      margin: 10}}>
          <Image source={{uri: shipment.imageUrl}}
                style={{width: 100, height: 200}}/>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: "bold",fontSize : 24}}>
                    {shipment.shipmentId}
                </Text>
                <Text style={{fontSize : 20}}>
                    {shipment.itemDescription}
                </Text>
                <Text style={{fontSize : 20}}>
                    {shipment.category}
                </Text>
                <Text style={{fontSize : 20}}>
                    {shipment.customerCity}
                </Text>
                <Text style={{fontSize : 20}}>
                    {shipment.customerPincode}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                { custOpenBox ? this.getCheckIcon("OpenBox", custOpenBox): null }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
