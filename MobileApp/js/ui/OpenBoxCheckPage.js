'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { DeliveryStatus } from '../constants/DeliveryStatus';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import { CheckTypeBooleanWithText } from './CheckTypeBooleanWithText';
import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeSingleChoice } from './CheckTypeSingleChoice';
import { CheckTypeTriState } from './CheckTypeTriState';
import { OpenBoxChecks, CheckTypes } from '../constants/OpenBoxChecks';

export class OpenBoxCheckPage extends Component {

  renderCheckTypeBoolean(shipmentId, checkId, navigation) {
    return (
      <CheckTypeBoolean shipmentId={shipmentId} checkId={checkId} navigation={navigation}/>
    )
  }

  renderCheckTypeTriState(shipmentId, checkId, navigation) {
    return (
      <CheckTypeTriState shipmentId={shipmentId} checkId={checkId} navigation={navigation}/>
    )
  }

  renderCheckTypeBooleanWithText(shipmentId, checkId, navigation) {
    return (
      <View style={{flex: 1}}>
      <CheckTypeBooleanWithText shipmentId={shipmentId} checkId={checkId} navigation={navigation}/>
      </View>
    )
  }

  renderCheckTypeMultiChoice(shipmentId, checkId, navigation) {
    return (
      <CheckTypeMultiChoice shipmentId={shipmentId} checkId={checkId} navigation={navigation}/>
    )
  }

  renderCheckTypeSingleChoice(shipmentId, checkId, navigation) {
    return (
      <CheckTypeSingleChoice shipmentId={shipmentId} checkId={checkId} navigation={navigation}/>
    )
  }

  getDummyShipment(shipmentId) {
    return {
      shipmentId,
      category: "MOBILE"
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    const shipmentId = this.props.navigation.getParam('shipmentId');
    // let shipment = ShipmentStore.getShipment(shipmentId);
    let shipment = this.getDummyShipment(shipmentId);

    const category = shipment.category;

    const openBoxChecks = OpenBoxChecks[category];

    const checkId = this.props.navigation.getParam('checkId');

    const openBoxCheck = openBoxChecks[checkId];

    const checkType = openBoxCheck.checkType;
    console.log("printing values")
    console.log(checkType.key);

    if(checkType.key===CheckTypes.MULTICHOICE.key) {
      return this.renderCheckTypeMultiChoice(shipmentId, checkId, navigation)
    }
    if(checkType.key===CheckTypes.SINGLECHOICE.key) {
      return this.renderCheckTypeSingleChoice(shipmentId, checkId, navigation)
    }
    if(checkType.key===CheckTypes.BOOLEAN.key) {
      return this.renderCheckTypeBoolean(shipmentId, checkId, navigation)
    }
    if(checkType.key===CheckTypes.TRISTATE.key) {
      return this.renderCheckTypeTriState(shipmentId, checkId, navigation)
    }
    if(checkType.key===CheckTypes.BOOLEANWITHTEXT.key) {
      return this.renderCheckTypeBooleanWithText(shipmentId, checkId, navigation)
    }
  }

}