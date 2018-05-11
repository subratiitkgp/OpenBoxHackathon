'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { OpenBoxChecks, CheckTypes, CheckNames } from '../constants/OpenBoxChecks';
import { CheckUtil } from '../util/CheckUtil';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';

export class CheckTypeSingleChoice extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <Button
        title="Yes"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}
        />
      <Button
        title="No"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "FAILED", this.props.navigation)},
          {text:"Cancel", onPress: () => console.log("Cancel pressed")}
        ])}      
        />
      </View>
      );
    }
}
