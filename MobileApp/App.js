'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { WelcomePage } from './js/ui/WelcomePage';
import { TaskPage } from './js/ui/TaskPage';
import { DeliveryShipmentDetailsPage } from './js/ui/DeliveryShipmentDetailsPage';
import { PickupShipmentDetailsPage } from './js/ui/PickupShipmentDetailsPage';
import { CheckTypeBoolean } from './js/ui/CheckTypeBoolean';
import { CheckTypeSingleChoice } from './js/ui/CheckTypeSingleChoice';
import { CheckTypeMultiChoice } from './js/ui/CheckTypeMultiChoice';
import { CheckTypeTriState } from './js/ui/CheckTypeTriState';
import { CheckTypeBooleanWithText } from './js/ui/CheckTypeBooleanWithText';



export const App = createStackNavigator({
  HomePage: { screen: WelcomePage },
  TaskPage: { screen: TaskPage },
  DeliveryShipmentDetailsPage: { screen: DeliveryShipmentDetailsPage },
  PickupShipmentDetailsPage: { screen: PickupShipmentDetailsPage },
  CheckTypeBoolean: {screen: CheckTypeBoolean},
  CheckTypeBooleanWithText: {screen: CheckTypeBooleanWithText},
  CheckTypeMultiChoice: {screen: CheckTypeMultiChoice},
  CheckTypeSingleChoice: {screen: CheckTypeSingleChoice},
  CheckTypeTriState: {screen: CheckTypeTriState}
});

