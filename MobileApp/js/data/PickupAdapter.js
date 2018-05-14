'use strict';
import { ShipmentStore } from '../data/ShipmentStore';

export class PickupAdapter {
  static initializePickupShipments() {
    let shipments = [];

    const shipment1 = {
      key: "1", shipmentId: "AMZPKP001", type: 'PICKUP',
      customerId: '123', customerName: 'Vishal Bhandari', customerAddress1: 'Banaswadi', customerAddress2: 'Banaswadi',
      customerCity: 'Bangalore', customerPincode: '560043',
      category: 'MOBILE',
      itemDescription : 'Samsung S7',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/61sKuELUGgL._SY879_.jpg',
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
              displayValue : "https://images-na.ssl-images-amazon.com/images/I/61sKuELUGgL._SY879_.jpg",
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
      itemDescription : "Women's Dress",
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/816rPQUICJL._UY879_.jpg',
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
                      displayValue : "https://images-na.ssl-images-amazon.com/images/I/816rPQUICJL._UY879_.jpg",
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

    const shipment3 = {
      key: "1", shipmentId: "AMZPKP003", type: 'PICKUP',
      customerId: '123', customerName: 'Subrat Panda', customerAddress1: 'Marathahalli', customerAddress2: 'Marathahalli',
      customerCity: 'Bangalore', customerPincode: '560103',
      category: 'BEAUTY',
      itemDescription : 'Nivea Deodrant',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/51jQGW7pLWL._SY879_.jpg',
      CUSTOMER_SMARTCHECK_CHECKS: undefined,
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

    shipments.push(shipment1, shipment2, shipment3);
    return shipments;
  }
}

