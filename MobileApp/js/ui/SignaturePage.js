'use strict';

import React, { Component } from 'react';
import { Alert, View, Button, Picker, StyleSheet } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
 
export class SignaturePage extends Component {
  static navigationOptions = {
    title: "Signature"
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <SignatureCapture
          style={[{flex:1},styles.signature]}
          ref="sign"
          onSaveEvent={(result) => this._onSaveEvent(result)}
          onDragEvent={() => this._onDragEvent()}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={"portrait"}
        />
        <View style={{margin: 10}}>
          <Button title={"Save"} onPress={() => this.saveSign() } />
        </View>
        <View style={{margin: 10}}>
          <Button title={"Reset"} onPress={() => this.resetSign() }/>
        </View>
      </View>
    );  
  }

  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
    // result.encoded - for the base64 encoded png
    // result.pathName - for the file path name
    // console.log(result);
    let shipment = this.props.navigation.getParam('shipment');
    shipment.status = this.props.navigation.getParam('status');
    shipment.reason = this.props.navigation.getParam('reason');
    DeliveryAdapter.syncDeliveryShipment(shipment);
    this.props.navigation.pop(2);
  }

  _onDragEvent() {
     // This callback will be called when the user enters signature
    // console.log("dragged");
  }
}

const styles = StyleSheet.create({
  signature: {
      flex: 1,
      borderColor: '#000033',
      borderWidth: 1,
  },
  buttonStyle: {
      flex: 1, justifyContent: "center", alignItems: "center", height: 50,
      backgroundColor: "#eeeeee",
      margin: 10
  }
});
