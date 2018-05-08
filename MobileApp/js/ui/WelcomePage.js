'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';

export class WelcomePage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 100}}>
        <Button
          title="Facility Manager"
          onPress={() =>
            navigate('TaskPage', { name: 'Jane' })
          }
        />
        <Button
          title="Delivery Executive"
          onPress={() =>
            navigate('TaskPage', { name: 'Jane' })
          }
        />
      </View>
    )
  }
}