'use strict';

export const PickupStatus = {
    PICKED: {key: "PICKED", value: "Picked"},
    UNPICKED_AGENT_ISSUE: {key: "UNPICKED_AGENT_ISSUE", value: "Unpicked Agent Issue"},
    UNPICKED_CUSTOMER_ISSUE: {key: "UNPICKED_CUSTOMER_ISSUE", value: "Unpicked Customer Issue"},
    UNPICKED_SMARTCHECK_FAILED: {key: "UNPICKED_SMARTCHECK_FAILED", value: "Unpicked Smart Check Failed"}
}

export const PickupReason = {
    PICKED: {
    },
    UNPICKED_AGENT_ISSUE: {
        RAIN: {key: "RAIN", value: "Rain"},
        VEHICLE_ISSUE: {key: "VEHICLE_ISSUE", value: "Vehicle Issue"},
        HEALTH_ISSUE: {key: "HEALTH_ISSUE", value: "Health Issue"}
    },
    UNPICKED_CUSTOMER_ISSUE: {
        PHONE_UNREACHABLE: {key: "PHONE_UNREACHABLE", value: "Phone Unreachable"},
        DOOR_CLOSED: {key: "DOOR_CLOSED", value: "Door Closed"}
    },
    UNPICKED_SMARTCHECK_FAILED: {
        PRODUCT_MISMATCH: {key: "PRODUCT_MISMATCH", value: "Product Mismatch"},
        SPECIFICATION_MISMATCH: {key: "SPECIFICATION_MISMATCH", value: "Specification Mismatch"},
        PRODUCT_DAMAGE: {key: "PRODUCT_DAMAGE", value: "Product Damage"}
    }
}