'use strict'

import { ShipmentType } from '../constants/ShipmentType';
import { DeliveryStatus } from '../constants/DeliveryStatus';

export const CheckScenario = {
  SELLER_OPENBOX: {key: "SELLER_OPENBOX", value: "Seller Openbox"},
  CUSTOMER_OPENBOX: {key: "CUSTOMER_OPENBOX", value: "Customer Openbox"},
  CUSTOMER_SMARTCHECK: {key: "CUSTOMER_SMARTCHECK", value: "Customer Smartcheck"},
  SELLER_SMARTCHECK: {key: "SELLER_SMARTCHECK", value: "Seller Smartcheck"}
}

export class CheckUtil {
  static getCheckScenario(shipmentType, shipmentStatus) {
    if (shipmentType === ShipmentType.DELIVERY.key) {
      if (shipmentStatus === DeliveryStatus.OUT_FOR_DELIVERY) {
        return CheckScenario.CUSTOMER_OPENBOX.key;
      }
    }

    return undefined;
  }
} 