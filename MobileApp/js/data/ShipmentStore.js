'use strict';

import { Store } from './Store';

export class ShipmentStore {
  static saveShipment(shipment) {
    Store.save(this.getShipmentSchema().name, shipment);
  }

  static saveAllShipments(shipments) {
    shipments.foreach(shipment => this.saveShipment(shipment));
  }

  static getShipment(shipmentId) {
    return Store.getSingle(this.getShipmentSchema().name, 'shipmentId = "' + shipmentId + '"');
  }

  static getAllShipments() {
    return Store.getAll(this.getShipmentSchema().name);
  }

  static deleteAllShipments() {
    Store.deleteAll(this.getShipmentSchema().name);
  }

  static getShipmentSchema() {
    return {
      name: "SHIPMENT",
      primaryKey: "shipmentId",
      properties: {
        shipmentId: 'string',
        customerId: 'string',
        customerName: 'string',
        customerAddress1: 'string',
        customerAddress2: 'string',
        customerCity: 'string',
        customerPincode: 'string',
        category: 'string',
        openBoxChecks: 'string[]', // Serialized
        status: 'string',
        reason: 'string'
      }
    }
  }

  static getCheckSchema() {
    return {
      checkName: 'string',
      checkData: 'string',
      checkResult: 'string'
    }
  }
}