'use strict';

let deliveryShipments = [];

export class DeliveryAdapter {
  static fetchDeliveryShipments() {
    let shipments = [];

    for (let i = 1; i <= 100; ++i) {
      let shipmentId = "DELIVERY" + (100000 + i);
      shipments.push({key: i.toString(), shipmentId});
    }
    deliveryShipments = shipments;
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
