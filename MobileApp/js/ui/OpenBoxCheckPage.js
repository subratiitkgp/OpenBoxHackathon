'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import { CheckTypeBooleanWithText } from './CheckTypeBooleanWithText';
import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeSingleChoice } from './CheckTypeSingleChoice';
import { CheckTypeTriState } from './CheckTypeTriState';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { CheckUtil } from '../util/CheckUtil';
import { ShipmentStore } from '../data/ShipmentStore';
import { ShipmentType } from '../constants/ShipmentType';

export class OpenBoxCheckPage extends Component {
  constructor(props) {
    super(props);

    const shipment = this.props.navigation.getParam('shipment');
    const checkId = this.props.navigation.getParam('checkId');

    const category = shipment.category;

    const openBoxChecks = OpenBoxChecks[category];
    const check = openBoxChecks[checkId];

    const checkScenario = "CUSTOMER_OPENBOX_CHECKS";

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

  static isLastCheck(checkDetails) {
    if(checkDetails.checkId === checkDetails.checksLength - 1) return true;
    else return false;
  }

  static navigateToNextPage(checkDetails, navigation) {
    console.log(checkDetails.shipment);
    if(!this.isLastCheck(checkDetails)) {
        navigation.push('OpenBoxCheckPage', {
          shipment: checkDetails.shipment,
          checkId: checkDetails.checkId + 1
        });
    } else {
      Alert.alert("Info", "All checks have been completed.",
      [
        {text:"Ok", onPress: () => {
            navigation.pop(checkDetails.checkId+2);
            const pageName = checkDetails.shipment.type === ShipmentType.DELIVERY.key ? 
              'DeliveryShipmentDetailsPage' : 'PickupShipmentDetailsPage';
            navigation.navigate(pageName, {shipmentId: checkDetails.shipment.shipmentId});
          }
        }
      ])
    }
  }

  static saveResultsAndNavigate(checkDetails, checkResult, navigation) {
    checkDetails.shipmentCheck.checkResults = checkResult;
    if(checkResult === "PASSED") {
      this.navigateToNextPage(checkDetails, navigation);
    } else {
        navigation.pop(checkDetails.checkId+2);
        navigation.navigate("DeliveryShipmentDetailsPage", {
          shipmentId: checkDetails.shipment.shipmentId
        });
    }
    ShipmentStore.saveShipment(checkDetails.shipment);
  }

  static navigationOptions = ({ navigation }) => {
    const shipment = navigation.getParam('shipment');
    const checkId = navigation.getParam('checkId');

    const category = shipment.category;
    const openBoxChecks = OpenBoxChecks[category];
    const check = openBoxChecks[checkId];
    const checkName = check.checkName;
    return {title: CheckNames[checkName].key};
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
