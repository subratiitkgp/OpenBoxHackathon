'use strict';

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

export const OpenBoxChecks = {
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