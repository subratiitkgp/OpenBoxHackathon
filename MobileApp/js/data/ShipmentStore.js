'use strict';

import { Store } from './Store';
import { StringUtil } from '../util/StringUtil';

export class ShipmentStore {
  static saveShipment(shipment) {
    let tmpShipment = StringUtil.cloneObject(shipment);
    tmpShipment.CUSTOMER_OPENBOX_CHECKS = JSON.stringify(shipment.CUSTOMER_OPENBOX_CHECKS);
    tmpShipment.SELLER_OPENBOX_CHECKS = JSON.stringify(shipment.SELLER_OPENBOX_CHECKS);
    tmpShipment.CUSTOMER_SMARTCHECK_CHECKS = JSON.stringify(shipment.CUSTOMER_SMARTCHECK_CHECKS);
    tmpShipment.SELLER_SMARTCHECK_CHECKS = JSON.stringify(shipment.SELLER_SMARTCHECK_CHECKS);
    Store.save(this.getShipmentSchema().name, shipment);
  }

  static saveAllShipments(shipments) {
    shipments.foreach(shipment => this.saveShipment(shipment));
  }

  static getShipment(shipmentId) {
    let shipment = Store.getSingle(this.getShipmentSchema().name, 'shipmentId = "' + shipmentId + '"');
    return this.cloneAndParseShipment(shipment);
  }

  static getAllShipments() {
    let shipments = Store.getAll(this.getShipmentSchema().name);
    return shipments.map(shipment => this.cloneAndParseShipment(shipment));
  }

  static deleteAllShipments() {
    Store.deleteAll(this.getShipmentSchema().name);
  }

  static cloneAndParseShipment(shipment) {
    let tmpShipment = StringUtil.cloneObject(shipment);
    tmpShipment.CUSTOMER_OPENBOX_CHECKS = JSON.parse(shipment.CUSTOMER_OPENBOX_CHECKS);
    tmpShipment.SELLER_OPENBOX_CHECKS = JSON.parse(shipment.SELLER_OPENBOX_CHECKS);
    tmpShipment.CUSTOMER_SMARTCHECK_CHECKS = JSON.parse(shipment.CUSTOMER_SMARTCHECK_CHECKS);
    tmpShipment.SELLER_SMARTCHECK_CHECKS = JSON.parse(shipment.SELLER_SMARTCHECK_CHECKS);
    return tmpShipment;
  }

  static getShipmentSchema() {
    return {
      name: "SHIPMENT",
      primaryKey: "shipmentId",
      properties: {
        key: 'string', shipmentId: 'string', type : 'string',
        customerId: 'string', customerName: 'string', customerAddress1: 'string', customerAddress2: 'string',
        customerCity: 'string', customerPincode: 'string',
        category: 'string',
        CUSTOMER_OPENBOX_CHECKS : 'string', SELLER_OPENBOX_CHECKS : 'string', CUSTOMER_SMARTCHECK_CHECKS : 'string', SELLER_SMARTCHECK_CHECKS : 'string',
        isSellerOBCheckRequired : 'bool', isSellerSCCheckRequired : 'bool', isCustomerOBCheckRequired : 'bool', isCustomerSCCheckRequired : 'bool',
        status: 'string', reason: 'string'
      }
    }
  }
}