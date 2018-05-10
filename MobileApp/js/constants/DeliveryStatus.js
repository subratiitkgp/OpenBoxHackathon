'use strict';

export const DeliveryStatus = {
    DELIVERED: {key: "DELIVERED", value: "Delivered"},
    UNDELIVERED_AGENT_ISSUE: {key: "UNDELIVERED_AGENT_ISSUE", value = "Undelivered Agent Issue"},
    UNDELIVERED_CUSTOMER_ISSUE: {key: "UNDELIVERED_CUSTOMER_ISSUE", value = "Undelivered Customer Issue"},
    UNDELIVERED_OPENBOX_FAILED: {key: "UNDELIVERED_OPENBOX_FAILED", value = "Undelivered Openbox Failed"}
}

export const DeliveryReason = {
    DELIVERED: {
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

export const Category = {
    APPAREL: {key:"APPAREL",value:"Apparel"},
    MOBILE: {key:"MOBILE", value:"Mobile phone"},
    ELECTRONICS: {key:"ELECTRONICS", "value": "Electronics Item"},
    BEAUTY: {key:"Beauty", value:"Health & Beauty"},
    LARGE: {key:"LARGE", value:"Large Item"}
}

export const CheckTypes = {
    MULTICHOICE: {key: "MULTICHOICE", value: "Multi-Choice"},
    SINGLECHOICE: {key: "SINGLECHOICE", value: "Single-Choice"},
    BOOLEAN: {key: "BOOLEAN", value: "Boolean"},
    TRISTATE: {key:"TRISTATE", value:"Tri State"},
    BOOLEANWITHTEXT: {key:"BOOLEANWITHTEXT", value:"Boolean with text"}
}

export const CategoryChecks = {
    MOBILE: [
        {checkName:"CATEGORY",value: "Category", checkType:CheckTypes.BOOLEANWITHTEXT},
        {checkName:"CONDITION",value: "Item Condition", checkType:CheckTypes.SINGLECHOICE},
        {checkName:"BRAND",value: "Brand", checkType:CheckTypes.BOOLEAN},
        {checkName:"COLOR",value: "Color", checkType:CheckTypes.TRISTATE},
        {checkName:"ACCESSORIES",value: "Accessories", checkType:CheckTypes.MULTICHOICE}
    ],
    APPAREL: [
        {checkName:"CATEGORY",value: "Category", checkType:CheckTypes.BOOLEANWITHTEXT},
        {checkName:"CONDITION",value: "Item Condition", checkType:CheckTypes.SINGLECHOICE},
        {checkName:"BRAND",value: "Brand", checkType:CheckTypes.BOOLEAN},
        {checkName:"SIZE",value: "Size", checkType:CheckTypes.BOOLEAN},
        {checkName:"COLOR",value: "Color", checkType:CheckTypes.TRISTATE}
    ],
    LARGE: [
        {checkName:"CATEGORY",value: "Category", checkType:CheckTypes.BOOLEANWITHTEXT},
        {checkName:"CONDITION",value: "Item Condition", checkType:CheckTypes.SINGLECHOICE},
        {checkName:"BRAND",value: "Brand", checkType:CheckTypes.BOOLEAN},
        {checkName:"COLOR",value: "Color", checkType:CheckTypes.TRISTATE},
        {checkName:"ACCESSORIES",value: "Accessories", checkType:CheckTypes.MULTICHOICE}
    ]
   


}