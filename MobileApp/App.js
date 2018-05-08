'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WelcomePage } from './js/ui/WelcomePage';
import { TaskPage } from './js/ui/TaskPage';

export const App = StackNavigator({
  HomePage: { screen: WelcomePage },
  TaskPage: { screen: TaskPage }
});

