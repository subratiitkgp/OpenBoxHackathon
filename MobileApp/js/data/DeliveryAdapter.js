'use strict';

export class DeliveryAdapter {
  static fetchDeliveryShipments() {
    let shipments = [];

    const shipment1 = {
      key: "1", shipmentId: "001", type: 'DELIVERY',
      customerId: '123', customerName: 'Vishal', customerAddress1: 'Banaswadi', customerAddress2: 'Banaswadi',
      customerCity: 'Bangalore', customerPincode: '560043',
      category: 'MOBILE',
      CUSTOMER_OPENBOX_CHECKS: [
        {
          checkName: 'COLOR',
          checkData: [ 
            { key : "CHARGER", value : "Charger" },
            { key: "HEADPHONE", value: "Headphone" },
            { key: "BATTERY", value: "Battery" }
          ],
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
          checkName: 'CATEGORY',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        },
        {
          checkName: 'ACCESSORIES',
          checkData: [ 
            { key : "CHARGER", value : "Charger" }],
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
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_SMARTCHECK_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: true,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: true,
      status: "OUT_FOR_DELIVERY",
      reason: undefined,
    }

    const shipment2 = {
      key: "2", 'shipmentId': "002", 'type' : 'DELIVERY', 
      customerId: '123', 'customerName': 'Vishal', 'customerAddress1': 'Banaswadi', 'customerAddress2': 'Banaswadi',
      customerCity: 'Bangalore', 'customerPincode': '560043',
      category: 'MOBILE',
      CUSTOMER_OPENBOX_CHECKS: [
        {
          checkName: 'COLOR',
          checkData: undefined,
          checkInfo: "BLACK",
          checkResults: undefined
        }
      ],
      SELLER_OPENBOX_CHECKS: undefined,
      CUSTOMER_SMARTCHECK_CHECKS: undefined,
      SELLER_SMARTCHECK_CHECKS: undefined,
      isSellerOBCheckRequired: true,
      isSellerSCCheckRequired: true,
      isCustomerOBCheckRequired: true,
      isCustomerSCCheckRequired: true,
      status: "OUT_FOR_DELIVERY",
      reason: undefined,
    }

    shipments.push(shipment1, shipment2);
    return shipments;
  }

  static getDeliveryShipment(shipmentId) {
    return this.fetchDeliveryShipments().find(shipment => shipment.shipmentId === shipmentId);
  }
}
