'use strict';

import React, { Component } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export class DummyPage extends Component {

  componentDidMount() {
    const shipmentId = this.props.navigation.getParam('shipmentId');
    const checkId = this.props.navigation.getParam('checkId');
    this.props.navigation.navigate('OpenBoxCheckPage', {shipmentId: shipmentId, checkId: checkId});
  }
  render() {

    return(
      <View>
        <Text>
          Ankit Rai
          </Text>
      </View>
    )
  }
}