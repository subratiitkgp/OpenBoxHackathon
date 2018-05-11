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
import { DeliveryAdapter} from '../data/DeliveryAdapter';

export class OpenBoxCheckPage extends Component {
  constructor(props) {
    super(props);

    const shipmentId = this.props.navigation.getParam('shipmentId');
    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
    const category = shipment.category;

    const openBoxChecks = OpenBoxChecks[category];
    const checkId = this.props.navigation.getParam('checkId');
    const openBoxCheck = openBoxChecks[checkId];

    console.log(category);
    console.log(openBoxChecks);
    console.log(checkId);
    console.log(openBoxCheck);

    const checkType = openBoxCheck.checkType;
    const checkName = openBoxCheck.checkName;

    this.localProps = {
      checkType,
      shipmentId,
      checkId,
      checkName
    };

  }

  static navigationOptions = ({ navigation }) => {
    // const {state} = navigation;
    // let title = `${state.params.title}`;
    // if (title === undefined) title = "Loading";
    // return { title };
    return {title: 'Open Box Check'};
  };

  renderCheckTypeBoolean() {
    return (
      <CheckTypeBoolean shipmentId={this.localProps.shipmentId} checkId={this.localProps.checkId} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeTriState() {
    return (
      <CheckTypeTriState shipmentId={this.localProps.shipmentId} checkId={this.localProps.checkId} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeBooleanWithText() {
    return (
      <View style={{flex: 1}}>
      <CheckTypeBooleanWithText shipmentId={this.localProps.shipmentId} checkId={this.localProps.checkId} navigation={this.props.navigation}/>
      </View>
    )
  }

  renderCheckTypeMultiChoice() {
    return (
      <CheckTypeMultiChoice shipmentId={this.localProps.shipmentId} checkId={this.localProps.checkId} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeSingleChoice() {
    return (
      <CheckTypeSingleChoice shipmentId={this.localProps.shipmentId} checkId={this.localProps.checkId} navigation={this.props.navigation}/>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    if(this.localProps.checkType === CheckTypes.MULTICHOICE.key) {
      return this.renderCheckTypeMultiChoice();
    }
    if(this.localProps.checkType === CheckTypes.SINGLECHOICE.key) {
      return this.renderCheckTypeSingleChoice();
    }
    if(this.localProps.checkType === CheckTypes.BOOLEAN.key) {
      return this.renderCheckTypeBoolean();
    }
    if(this.localProps.checkType === CheckTypes.TRISTATE.key) {
      return this.renderCheckTypeTriState();
    }
    if(this.localProps.checkType === CheckTypes.BOOLEANWITHTEXT.key) {
      return this.renderCheckTypeBooleanWithText();
    }
  }
}