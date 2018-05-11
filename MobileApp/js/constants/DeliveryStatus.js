'use strict';

export const DeliveryStatus = {
    OUT_FOR_DELIVERY: {key: "OUT_FOR_DELIVERY", value: "Out For Delivery"},
    DELIVERED: {key: "DELIVERED", value: "Delivered"},
    UNDELIVERED_AGENT_ISSUE: {key: "UNDELIVERED_AGENT_ISSUE", value: "Undelivered Agent Issue"},
    UNDELIVERED_CUSTOMER_ISSUE: {key: "UNDELIVERED_CUSTOMER_ISSUE", value: "Undelivered Customer Issue"},
    UNDELIVERED_OPENBOX_FAILED: {key: "UNDELIVERED_OPENBOX_FAILED", value: "Undelivered Openbox Failed"}
}

export const DeliveryReason = {
    DELIVERED: {
    },
    OUT_FOR_DELIVERY: {
    },
    UNDELIVERED_AGENT_ISSUE: {
        RAIN: {key: "RAIN", value: "Rain"},
        VEHICLE_ISSUE: {key: "VEHICLE_ISSUE", value: "Vehicle Issue"},
        HEALTH_ISSUE: {key: "HEALTH_ISSUE", value: "Health Issue"}
    },
    UNDELIVERED_CUSTOMER_ISSUE: {
        PHONE_UNREACHABLE: {key: "PHONE_UNREACHABLE", value: "Phone Unreachable"},
        DOOR_CLOSED: {key: "DOOR_CLOSED", value: "Door Closed"}
    },
    UNDELIVERED_OPENBOX_FAILED: {
        PRODUCT_MISMATCH: {key: "PRODUCT_MISMATCH", value: "Product Mismatch"},
        SPECIFICATION_MISMATCH: {key: "SPECIFICATION_MISMATCH", value: "Specification Mismatch"},
        PRODUCT_DAMAGE: {key: "PRODUCT_DAMAGE", value: "Product Damage"}
    }
}
