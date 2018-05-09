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

export const App = createStackNavigator({
  HomePage: { screen: WelcomePage },
  TaskPage: { screen: TaskPage },
  DeliveryShipmentDetailsPage: { screen: DeliveryShipmentDetailsPage },
  PickupShipmentDetailsPage: { screen: PickupShipmentDetailsPage }
});

