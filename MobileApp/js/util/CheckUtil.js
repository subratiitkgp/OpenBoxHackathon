'use strict'

import { ShipmentType } from '../constants/ShipmentType';
import { DeliveryStatus } from '../constants/DeliveryStatus';
import { PickupStatus } from '../constants/PickupStatus';

export const CheckScenario = {
  SELLER_OPENBOX_CHECKS: {key: "SELLER_OPENBOX_CHECKS", value: "Seller Openbox"},
  CUSTOMER_OPENBOX_CHECKS: {key: "CUSTOMER_OPENBOX_CHECKS", value: "Customer Openbox"},
  CUSTOMER_SMARTCHECK_CHECKS: {key: "CUSTOMER_SMARTCHECK_CHECKS", value: "Customer Smartcheck"},
  SELLER_SMARTCHECK_CHECKS: {key: "SELLER_SMARTCHECK_CHECKS", value: "Seller Smartcheck"}
}

export class CheckUtil {
  static getCheckScenario(shipmentType, shipmentStatus) {
    if (shipmentType === ShipmentType.DELIVERY.key) {
      if (shipmentStatus === DeliveryStatus.OUT_FOR_DELIVERY.key) {
        return CheckScenario.CUSTOMER_OPENBOX_CHECKS.key;
      }
    } else if (shipmentType === ShipmentType.PICKUP.key) {
      if (shipmentStatus === PickupStatus.OUT_FOR_PICKUP.key) {
        return CheckScenario.CUSTOMER_SMARTCHECK_CHECKS.key;
      }
    }

    return undefined;
  }
} 