'use strict';

import React, { Component } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { DeliveryAdapter} from '../data/DeliveryAdapter';

export class DeliveryShipmentDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const shipmentId = navigation.getParam('shipmentId');
    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);

    return(
        <View style={{flex: 1, flexDirection: 'row',
              justifyContent: 'space-evenly', alignItems: 'center',
              margin: 10}}>
            <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg'}}
                  style={{width: 100, height: 200}}
            />
          <Text>
            {shipmentId}
          </Text>
          <Button
          title="Start Open Box"
          onPress={() => {
            navigation.navigate("OpenBoxCheckPage", {shipmentId: shipmentId, checkId: 0});
          }}
        />
        </View>
    );
  }
}
