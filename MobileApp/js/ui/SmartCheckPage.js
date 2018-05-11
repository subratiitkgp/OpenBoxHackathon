'use strict';

import React, { Component } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { CheckTypeBoolean } from './CheckTypeBoolean';
import { CheckTypeMultiChoice } from './CheckTypeMultiChoice';
import { CheckTypeBooleanWithData } from './CheckTypeBooleanWithData';
import { CheckTypeBooleanWithImage } from './CheckTypeBooleanWithImage';
import { SmartChecks, CheckTypes, CheckNames } from '../constants/SmartChecks';
import { CheckUtil } from '../util/CheckUtil';
import { ShipmentStore } from '../data/ShipmentStore';
import { ShipmentType } from '../constants/ShipmentType';

export class SmartCheckPage extends Component {
  constructor(props) {
    super(props);
    const shipment = this.props.navigation.getParam('shipment');
    const checkId = this.props.navigation.getParam('checkId');

    const category = shipment.category;

    const smartChecks = SmartChecks[category];
    const check = smartChecks[checkId];

    const checkScenario = "CUSTOMER_SMARTCHECK_CHECKS";

    const checksLength = smartChecks.length;
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
    if(!this.isLastCheck(checkDetails)) {
        navigation.push('SmartCheckPage', {
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
        const pageName = checkDetails.shipment.type === ShipmentType.DELIVERY.key ? 
              'DeliveryShipmentDetailsPage' : 'PickupShipmentDetailsPage';
        navigation.navigate(pageName, {shipment: checkDetails.shipment});
    }
    ShipmentStore.saveShipment(checkDetails.shipment);
  }

  static navigationOptions = ({ navigation }) => {
    const shipment = navigation.getParam('shipment');
    const checkId = navigation.getParam('checkId');

    const category = shipment.category;
    const smartChecks = SmartChecks[category];
    const check = smartChecks[checkId];
    const checkName = check.checkName;
    return {title: CheckNames[checkName].key};
  };

  renderCheckTypeBoolean() {
    return (
      <CheckTypeBoolean checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }

  renderCheckTypeBooleanWithData() {
    return (
      <View style={{flex: 1}}>
      <CheckTypeBooleanWithData checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
      </View>
    )
  }

  renderCheckTypeBooleanWithImage() {
    return (
      <View style={{flex: 1}}>
      <CheckTypeBooleanWithImage checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
      </View>
    )
  }

  renderCheckTypeMultiChoice() {
    return (
      <CheckTypeMultiChoice checkDetails={this.localProps.checkDetails} navigation={this.props.navigation}/>
    )
  }


  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    if(this.localProps.checkDetails.check.checkType === CheckTypes.MULTICHOICE.key) {
      return this.renderCheckTypeMultiChoice();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.BOOLEAN.key) {
      return this.renderCheckTypeBoolean();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.BOOLEANWITHDATA.key) {
      return this.renderCheckTypeBooleanWithData();
    }
    if(this.localProps.checkDetails.check.checkType === CheckTypes.BOOLEANWITHIMAGE.key) {
      return this.renderCheckTypeBooleanWithImage();
    }
  }
}
