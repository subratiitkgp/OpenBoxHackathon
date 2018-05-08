'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Deliveries} from './Deliveries';
import { Pickups } from './Pickups';

export const TaskPage = createMaterialTopTabNavigator({
  Delivery: Deliveries,
  Pickup: Pickups,
});