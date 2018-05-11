'use strict';

import React, { Component } from 'react';
import { Alert, View, Button, Picker, StyleSheet, Modal, Text } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import {DeliveryAdapter} from '../data/DeliveryAdapter';

export class SignaturePage extends Component {
  constructor(props) {
    super(props);

    let shipment = this.props.navigation.getParam('shipment');
    let status = this.props.navigation.getParam('status');
    let reason = this.props.navigation.getParam('reason');

    this.localProps = {
      shipment,
      status,
      reason
    };

    this.state = {
      reviewModalVisible: false,
      reviewedSummary: !shipment.isCustomerOBCheckRequired,
      signed: false,
    }
  }

  static navigationOptions = {
    title: "Signature"
  };

  render() {
    let shipment = this.localProps.shipment;

    console.log(this.state.reviewedSummary);
    console.log(this.state.signed);
    
    return (
      <View style={{flex: 1}}>
        <View style={{margin: 10}}>
          <Button
            title={"ShipmentId: " + shipment.shipmentId}
            disabled={true}
            onPress={() => this.showSummary()}
          />
        </View>
        {
          shipment.isCustomerOBCheckRequired ? 
            <View style={{margin: 10}}>
              <Button
                title="Review Summary"
                onPress={() => this.showSummary()}
              />
            </View>
          : null    
        }

        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.reviewModalVisible}
            onRequestClose={() => {
              this.setState({reviewModalVisible: false});
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Please Review Check Summary: {'\n'}</Text>
                {this.getSummaryText()}
                <View style={{margin: 10}}>
                  <Button
                    title="Reviewed"
                    onPress={() => {
                      this.setState({reviewModalVisible: false});
                    }}>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>

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
          <Button title={"Save"} 
            onPress={() => this.saveSign()} 
            disabled={!(this.state.reviewedSummary && this.state.signed)} />
        </View>
        <View style={{margin: 10}}>
          <Button title={"Reset"} onPress={() => this.resetSign() } disabled={!this.state.signed}/>
        </View>
      </View>
    );  
  }

  getCheckSummary(check) {
  }

  getSummaryText() {
    const shipment = this.localProps.shipment;
    const checks = shipment.CUSTOMER_OPENBOX_CHECKS;

    return (
      <View>
        {
          checks.map((check, index) => {
            return (
              <Text style={{fontSize: 20, fontWeight: 'bold'}} key={index}>{check.checkName}: {check.checkResults}{'\n'}</Text>
            );
          })
        }
      </View>
    );
  }

  showSummary() {
    this.setState({reviewedSummary: true, reviewModalVisible: true});
  }

  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
    this.setState({signed: false});
  }

  _onSaveEvent(result) {
    // result.encoded - for the base64 encoded png
    // result.pathName - for the file path name
    let shipment = this.localProps.shipment;
    shipment.status = this.localProps.status;
    shipment.reason = this.localProps.reason;
    shipment.signature = result.encoded;
    DeliveryAdapter.syncDeliveryShipment(shipment);
    this.props.navigation.pop(2);
  }

  _onDragEvent() {
    this.setState({signed: true});
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
