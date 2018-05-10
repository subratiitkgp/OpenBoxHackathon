'use strict';

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, CheckBox } from 'react-native';

export class Delivery extends Component {
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
          <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg'}}
                style={{width: 100, height: 200}}
          />
          <View style={{flexDirection: 'column'}}>
          <Text>
            {shipment.shipmentId}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {custOpenBox===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"COB"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {sellerOpenBox===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"SOB"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {custSC===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"CSC"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}
            {sellerSC===true ? 
              <View>
              <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'green'}}/>
                <Text>
                  {"SSC"}
                </Text>
              </View>
              : <View style={{width: 20, height: 20, borderWidth: 2, backgroundColor: 'grey'}}/>}   
          </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
