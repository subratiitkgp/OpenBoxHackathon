'use strict';

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { OpenBoxCheckPage } from './OpenBoxCheckPage';

export class CheckTypeBooleanWithImage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-evenly', margin: 50}}>
      <Text style={{fontWeight: "bold",fontSize : 24}}>
        {this.props.checkDetails.checkQuestionHeader}
      </Text>
      <Image source={{uri: "https://images-na.ssl-images-amazon.com/images/I/51SJl9whqSL.__AC_SY400_.jpg"}}
             style={{width: 200, height: 200}}
       />
      <Button
        title="Yes"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is passed?",
        [ 
          {text:"Ok", onPress: () => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "PASSED", this.props.navigation)},
          {text:"Cancel", onPress: () => {}}
        ])}
        />
      <Button
        title="No"
        onPress={() => Alert.alert("Confirmation", "Are you sure your check is failed? This will take you back to main page.",
        [ 
          {text:"Ok", onPress:() => OpenBoxCheckPage.saveResultsAndNavigate(this.props.checkDetails, "FAILED", this.props.navigation)},
          {text:"Cancel", onPress: () => {}}
        ])}      
        />
      </View>
      )
    }
}
