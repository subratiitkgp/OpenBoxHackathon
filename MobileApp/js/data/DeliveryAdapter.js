'use strict';

import { ShipmentStore } from '../data/ShipmentStore';

let shipmentsGlobal = [];

export class DeliveryAdapter {
  static setDeliveryShipments(shipments) {
    shipmentsGlobal = shipments;
  }

  static fetchDeliveryShipments() {
    return shipmentsGlobal;
  }

  static initializeDeliveryShipments() {
    let shipments = [];

    const shipment1 = {
      key: "1", shipmentId: "001", type: 'DELIVERY',
      customerId: '123', customerName: 'Vishal', customerAddress1: 'Banaswadi', customerAddress2: 'Banaswadi',
      customerCity: 'Bangalore', customerPincode: '560043',
      category: 'MOBILE',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71SVO4osmJL._SY879_.jpg',
      CUSTOMER_OPENBOX_CHECKS: [
        {
          checkName: 'CATEGORY',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
          checkName: 'COLOR',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
          checkName: 'CONDITION',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
          checkName: 'BRAND',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
                  checkName: 'ACCESSORIES',
                  checkData: [
                    { key : "CHARGER", value : "Charger" },
                    { key: "HEADPHONE", value: "Headphone" },
                    { key: "BATTERY", value: "Battery" }
                  ],
                  checkInfo: "BLACK",
                  checkResults: undefined
        },
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_SMARTCHECK_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: true,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: false,
      status: "OUT_FOR_DELIVERY",
      reason: undefined,
      signature: undefined
    }

    const shipment2 = {
      key: "2", 'shipmentId': "002", 'type' : 'DELIVERY', 
      customerId: '123', 'customerName': 'Vishal', 'customerAddress1': 'Banaswadi', 'customerAddress2': 'Banaswadi',
      customerCity: 'Bangalore', 'customerPincode': '560043',
      category: 'APPAREL',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81Q9deM-LXL._UY879_.jpg',
      CUSTOMER_OPENBOX_CHECKS: [
        {
           checkName: 'CATEGORY',
           checkData: undefined,
           checkInfo: "BLACK",
           checkResults: undefined
        },
        {
           checkName: 'COLOR',
           checkData: undefined,
           checkInfo: "WHITE",
           checkResults: undefined
        },
            {
              checkName: 'SIZE',
              checkData: undefined,
              checkInfo: "MEDIUM",
              checkResults: undefined
            },
            {
              checkName: 'CONDITION',
              checkData: undefined,
              checkInfo: "BLACK",
              checkResults: undefined
            },
            {
              checkName: 'BRAND',
              checkData: undefined,
              checkInfo: "ALLEN SOLLY",
              checkResults: undefined
            },
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_SMARTCHECK_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: false,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: false,
      status: "OUT_FOR_DELIVERY",
      reason: undefined,
      signature: undefined
    }
    const shipment3 = {
          key: "3", shipmentId: "003", type: 'DELIVERY',
          customerId: '123', customerName: 'Vishal', customerAddress1: 'Banaswadi', customerAddress2: 'Banaswadi',
          customerCity: 'Bangalore', customerPincode: '560043',
          category: 'LARGE',
          imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81drtEjsU8L._SX679_.jpg',
          CUSTOMER_OPENBOX_CHECKS: [
            {
              checkName: 'CATEGORY',
              checkData: undefined,
              checkInfo: "BLACK",
              checkResults: undefined
            },
            {
              checkName: 'COLOR',
              checkData: undefined,
              checkInfo: "BLACK",
              checkResults: undefined
            },

            {
              checkName: 'CONDITION',
              checkData: undefined,
              checkInfo: "BLACK",
              checkResults: undefined
            },
            {
              checkName: 'BRAND',
              checkData: undefined,
              checkInfo: "BLACK",
              checkResults: undefined
            },
            {
                          checkName: 'ACCESSORIES',
                          checkData: [
                            { key : "WIRE", value : "Wire" },
                            { key: "STAND", value: "Stand" }
                          ],
                          checkInfo: "BLACK",
                          checkResults: undefined
            },
          ],
          SELLER_OPENBOX_CHECKS: undefined,
          CUSTOMER_SMARTCHECK_CHECKS: undefined,
          SELLER_SMARTCHECK_CHECKS: undefined,
          isSellerOBCheckRequired: true,
          isSellerSCCheckRequired: true,
          isCustomerOBCheckRequired: false,
          isCustomerSCCheckRequired: false,
          status: "OUT_FOR_DELIVERY",
          reason: undefined,
        }

    const shipment4 = {
          key: "4", 'shipmentId': "004", 'type' : 'DELIVERY',
          customerId: '123', 'customerName': 'Vishal', 'customerAddress1': 'Banaswadi', 'customerAddress2': 'Banaswadi',
          customerCity: 'Bangalore', 'customerPincode': '560043',
          category: 'BEAUTY',
          imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71Mua-w4%2BTL._SL1500_.jpg',
          CUSTOMER_OPENBOX_CHECKS: [
            {
               checkName: 'CATEGORY',
               checkData: undefined,
               checkInfo: "BLACK",
               checkResults: undefined
            },
            {
               checkName: 'COLOR',
               checkData: undefined,
               checkInfo: "RED",
               checkResults: undefined
            },

                {
                  checkName: 'CONDITION',
                  checkData: undefined,
                  checkInfo: "BLACK",
                  checkResults: undefined
                },
                {
                  checkName: 'BRAND',
                  checkData: undefined,
                  checkInfo: "LAKME",
                  checkResults: undefined
                },
          ],
          SELLER_OPENBOX_CHECKS: undefined,
          CUSTOMER_SMARTCHECK_CHECKS: undefined,
          SELLER_SMARTCHECK_CHECKS: undefined,
          isSellerOBCheckRequired: true,
          isSellerSCCheckRequired: false,
          isCustomerOBCheckRequired: true,
          isCustomerSCCheckRequired: false,
          status: "OUT_FOR_DELIVERY",
          reason: undefined,
        }


    shipments.push(shipment1, shipment2, shipment3, shipment4);

    shipmentsGlobal = shipments;
    return shipments;
  }

  static getDeliveryShipment(shipmentId) {
    return this.fetchDeliveryShipments().find(shipment => shipment.shipmentId === shipmentId);
  }

  static syncDeliveryShipment(shipment) {
    ShipmentStore.saveShipment(shipment);
  }
}
