'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { DeliveryStatus } from '../constants/DeliveryStatus';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import { CheckTypeBooleanWithText } from './CheckTypeBooleanWithText';
import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeSingleChoice } from './CheckTypeSingleChoice';
import { CheckTypeTriState } from './CheckTypeTriState';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { DeliveryAdapter} from '../data/DeliveryAdapter';
import { CheckUtil } from '../util/CheckUtil';

export class OpenBoxCheckPage extends Component {
  constructor(props) {
    super(props);

    const shipmentId = this.props.navigation.getParam('shipmentId');
    const checkId = this.props.navigation.getParam('checkId');

    let shipment = DeliveryAdapter.getDeliveryShipment(shipmentId);
    const category = shipment.category;

    const openBoxChecks = OpenBoxChecks[category];
    const check = openBoxChecks[checkId];

    const checkScenario = CheckUtil.getCheckScenario(shipment.type, shipment.status);

    const checksLength = openBoxChecks.length;
    const checkName = check.checkName;
    const checkQuestionHeader = CheckNames[check.checkName].value;

    const shipmentCheck = shipment[checkScenario][checkId];

    this.localProps = {
      checkDetails: {
        shipment,
        shipmentCheck,
        check,
        checkId,
        checkScenario,
        checksLength,
        checkQuestionHeader
      }
    };
  }

  static isLastCheck(checkId, checksLength) {
    if(checkId === checksLength - 1) return true;
    else return false;
  }

  static navigateToNextPage(checkId, checksLength, navigation, shipmentId) {
    if(!this.isLastCheck(checkId, checksLength)) {
        navigation.push('OpenBoxCheckPage', {
          shipmentId,
          checkId: checkId + 1
        });
      } else {
        Alert.alert("Info", "All checks have been completed.", [
          {text:"Ok", onPress: () => navigation.pop(checkId + 1)},
        ])
      }
  }

  static navigationOptions = ({ navigation }) => {
    return {title: 'Open Box Check'};
  };

  renderCheckTypeBoolean() {
    return (
      <CheckTypeBoolean checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeTriState() {
    return (
      <CheckTypeTriState checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeBooleanWithText() {
    return (
      <View style={{flex: 1}}>
      <CheckTypeBooleanWithText checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
      </View>
    )
  }

  renderCheckTypeMultiChoice() {
    return (
      <CheckTypeMultiChoice checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeSingleChoice() {
    return (
      <CheckTypeSingleChoice checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    if(this.localProps.checkDetails.check.checkType === CheckTypes.MULTICHOICE.key) {
      return this.renderCheckTypeMultiChoice();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.SINGLECHOICE.key) {
      return this.renderCheckTypeSingleChoice();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.BOOLEAN.key) {
      return this.renderCheckTypeBoolean();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.TRISTATE.key) {
      return this.renderCheckTypeTriState();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.BOOLEANWITHTEXT.key) {
      return this.renderCheckTypeBooleanWithText();
    }
  }
}