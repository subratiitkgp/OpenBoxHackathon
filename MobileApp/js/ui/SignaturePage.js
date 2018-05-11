'use strict';

import React, { Component } from 'react';
import { Alert, View, Button, Picker, StyleSheet, Modal, Text, ActivityIndicator } from 'react-native';
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
      loadingModalVisible: false
    }
  }

  static navigationOptions = {
    title: "Signature"
  };

  render() {
    let shipment = this.localProps.shipment;    
    return (
      <View style={{flex: 1}}>
        {
          shipment.isCustomerOBCheckRequired ? 
            <View style={{margin: 10}}>
              <Text style={{fontSize: 24}}>Please Review Check Summary</Text>
              <Button
                title="Review Check Summary"
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
            <View style={{flex: 1, margin: 50, justifyContent: 'space-between', borderWidth: 2}}>
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
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {}}
            visible={this.state.loadingModalVisible}>
              <View style={{margin: 50, backgroundColor: 'lightblue', alignItems: 'center', borderWidth: 5}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Saving</Text>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
          </Modal>

        <View style={{flex: 1, height: "100%", margin: 10}}>
          <Text style={{fontSize: 24}}>Please Sign Below</Text>
          <SignatureCapture
            style={[{flex:1},styles.signature]}
            ref="sign"
            onSaveEvent={(result) => this._onSaveEvent(result)}
            onDragEvent={() => this._onDragEvent()}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={true}
            viewMode={"portrait"}
          />
        </View>
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
      <View style={{flex: 1, margin: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Please Review Check Summary: {'\n'} {'\n'}</Text>
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
    this.setState({loadingModalVisible: true});
    setTimeout(() => {
      this.setState({loadingModalVisible: false});
      this.props.navigation.pop(3);
      this.props.navigation.navigate("TaskPage");
    }, 2000);
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
