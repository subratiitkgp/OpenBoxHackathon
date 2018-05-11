'use strict';
import { ShipmentStore } from '../data/ShipmentStore';

let shipmentsGlobal = [];

export class PickupAdapter {
  static setPickupShipments(shipments) {
    shipmentsGlobal = shipments;
  }

  static fetchPickupShipments() {
    return shipmentsGlobal;
  }

  static initializePickupShipments() {
    let shipments = [];

    const shipment1 = {
      key: "1", shipmentId: "AMZPKP001", type: 'PICKUP',
      customerId: '123', customerName: 'Vishal Bhandari', customerAddress1: 'Banaswadi', customerAddress2: 'Banaswadi',
      customerCity: 'Bangalore', customerPincode: '560043',
      category: 'MOBILE',
      itemDescription : 'Samsung S7',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg',
      CUSTOMER_SMARTCHECK_CHECKS: [
        {
          checkName: 'CONDITION',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
           checkName: 'IMAGE',
           checkInfo: undefined,
           checkData: {
              displayText : "Image",
              displayValue : "https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg",
              required: true
           },
           checkResults: undefined
        },
        {
          checkName: 'SERIAL',
          checkInfo: undefined,
          checkData: {
              displayText : "Serial Number",
              displayValue : "IMEI00929230409",
              required: true
          },
          checkResults: undefined
        },
        {
          checkName: 'ACCESSORIES',
          checkData: [
            { key : "CHARGER", value : "Charger", required: true },
            { key: "HEADPHONE", value: "Headphone", required: false },
            { key: "BATTERY", value: "Battery", required: true }
          ],
          checkInfo: "BLACK",
          checkResults: undefined
        },
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_OPENBOX_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: true,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: true,
      status: "OUT_FOR_PICKUP",
      reason: undefined,
      signature: undefined
    }

    const shipment2 = {
      key: "2", 'shipmentId': "AMZPKP002", 'type' : 'PICKUP',
      customerId: '123', 'customerName': 'Ankit Rai', 'customerAddress1': 'Kalyan Nagar', 'customerAddress2': 'Banaswadi',
      customerCity: 'Bangalore', 'customerPincode': '560043',
      category: 'APPAREL',
      itemDescription : "Men's T-Shirt",
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81Q9deM-LXL._UY879_.jpg',
      CUSTOMER_SMARTCHECK_CHECKS: [
        {
           checkName: 'CONDITION',
           checkData: undefined,
           checkInfo: "BLACK",
           checkResults: undefined
        },
        {
           checkName: 'IMAGE',
           checkInfo: undefined,
           checkData: {
                      displayText : "Image",
                      displayValue : "https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg",
                      required: true
           },
           checkResults: undefined
        }
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_OPENBOX_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: false,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: true,
      status: "OUT_FOR_PICKUP",
      reason: undefined,
      signature: undefined
    }

    shipments.push(shipment1, shipment2);

    shipmentsGlobal = shipments;
    return shipments;
  }

  static getPickupShipment(shipmentId) {
    return this.fetchPickupShipments().find(shipment => shipment.shipmentId === shipmentId);
  }

  static syncPickupShipment(shipment) {
    ShipmentStore.saveShipment(shipment);
  }
}

