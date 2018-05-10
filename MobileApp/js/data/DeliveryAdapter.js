'use strict';

let deliveryShipments = [];

export class DeliveryAdapter {
  static fetchDeliveryShipments() {
    let shipments = [];

    const shipment1 = {
    'key': "1",
    'shipmentId': "001",
    'type' : 'DELIVERY',
    'customerId' : '123',
    'customerName': 'Vishal',
    'customerAddress1': 'Banaswadi',
    'customerAddress2': 'Banaswadi',
    'customerCity': 'Bangalore',
    'customerPincode': '560043',
    'category': 'MOBILE',
    'CUSTOMER_OPENBOX_CHECKS': [{
      'checkName': 'COLOR',
      'checkData': [ 
        { key : "CHARGER",
          value : "Charger"
        },
        {
          key: "HEADPHONE",
          value: "Headphone"
        },
        {
          key: "BATTERY",
          value: "Battery"
        }
      ],
      'checkInfo': "BLACK",
      'results' : undefined
    },
    {
        'checkName': 'CATEGORY',
        'checkData': undefined,
        'checkInfo': "BLACK",
        'results' : undefined
    },
    {
        'checkName': 'ACCESSORIES',
        'checkData':[ { key : "CHARGER",
        value : "Charger"
        }
        ],
        'checkInfo': "BLACK",
        'results' : undefined
    },
    {
        'checkName': 'CONDITION',
        'checkData': undefined,
        'checkInfo': "BLACK",
        'results' : undefined
    },
    {
         'checkName': 'CONDITION',
         'checkData': undefined,
         'checkInfo': "BLACK",
         'results' : undefined
    },
    {
          'checkName': 'BRAND',
          'checkData': undefined,
          'checkInfo': "BLACK",
          'results' : undefined
    },
    ],
    'SELLER_OPENBOX_CHECKS': "",
    'CUSTOMER_SMARTCHECK_CHECKS' : "",
    'SELLER_SMARTCHECK_CHECKS' : "",
    'isSellerOBCheckRequired' : true,
    'isSellerSCCheckRequired' : true,
    'isCustomerOBCheckRequired' : true,
    'isCustomerSCCheckRequired' : true,
    'status': "OUT_FOR_DELIVERY",
    'reason': "",
    }

    const shipment2 = {
    'key': "2",
    'shipmentId': "002",
    'type' : 'DELIVERY',
    'customerId' : '123',
    'customerName': 'Vishal',
    'customerAddress1': 'Banaswadi',
    'customerAddress2': 'Banaswadi',
    'customerCity': 'Bangalore',
    'customerPincode': '560043',
    'category': 'MOBILE',
    'CUSTOMER_OPENBOX_CHECKS': [{
      'checkName': 'COLOR',
      'checkData': undefined,
      'checkInfo': "BLACK",
      'results' : undefined
    }],
    'SELLER_OPENBOX_CHECKS': "",
    'CUSTOMER_SMARTCHECK_CHECKS' : "",
    'SELLER_SMARTCHECK_CHECKS' : "",
    'isSellerOBCheckRequired' : true,
    'isSellerSCCheckRequired' : true,
    'isCustomerOBCheckRequired' : true,
    'isCustomerSCCheckRequired' : true,
    'status': "OUT_FOR_DELIVERY",
    'reason': "",
    }

    /*
    for (let i = 1; i <= 100; ++i) {
      let shipmentId = "DELIVERY" + (100000 + i);
      shipments.push({key: i.toString(), shipmentId});
    }
    // deliveryShipments = shipments;

    */

    shipments.push(shipment1, shipment2);
    return shipments;
  }

  static updateDeliveryShipments(shipmentId, status, openBoxInfo) {
    // TODO
  }

  static getDeliveryShipments() {
    return deliveryShipments;
  }

  static getDeliveryShipment(shipmentId) {
    return deliveryShipments.find(shipment => shipment.shipmentId === shipmentId);
  }
}
