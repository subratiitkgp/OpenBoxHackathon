'use strict';

let pickupShipments = [];

export class PickupAdapter {
  static fetchPickupShipments() {
    let shipments = [];
    for (let i = 1; i <= 100; ++i) {
      let shipmentId = "PICKUP" + (100000 + i);
      shipments.push({key: i.toString(), shipmentId});
    }
    pickupShipments = shipments;
  }

  static updatePickupShipment(shipmentId, status, smartCheckInfo) {
    // TODO
  }

  static getPickupShipments() {
    return pickupShipments;
  }

  static getPickupShipment(shipmentId) {
    return pickupShipments.find(shipment => shipment.shipmentId == shipmentId);
  }
}
