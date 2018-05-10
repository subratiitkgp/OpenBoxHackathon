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

export const CheckNames = {
  CATEGORY: {key: "CATEGORY", value: "Is the Category of the item correct ?"},
  CONDITION: {key: "CONDITION", value: "Is the condition of the item good ?"},
  BRAND: {key: "BRAND", value: "Is the brand of the item correct ?"}
  COLOR: {key: "COLOR", value: "Is the color of the item correct ?"}
  SIZE:  {key: "SIZE", value: "Is the size of the item correct ?"}
  ACCESSORIES : {key: "ACCESSORIES", value: "Are all the accessories present ?"}
}

export const OpenBoxChecks = {
  MOBILE: [
      {checkName:CheckNames.CATEGORY, checkType:CheckTypes.BOOLEANWITHTEXT},
      {checkName:CheckNames.CONDITION, checkType:CheckTypes.SINGLECHOICE},
      {checkName:CheckNames.BRAND, checkType:CheckTypes.BOOLEAN},
      {checkName:CheckNames.COLOR, checkType:CheckTypes.TRISTATE},
      {checkName:"ACCESSORIES",value: "Accessories", checkType:CheckTypes.MULTICHOICE}
  ],
  APPAREL: [
      {checkName:CheckNames.CATEGORY, checkType:CheckTypes.BOOLEANWITHTEXT},
      {checkName:CheckNames.CONDITION, checkType:CheckTypes.SINGLECHOICE},
      {checkName:CheckNames.BRAND, checkType:CheckTypes.BOOLEAN},
      {checkName:CheckNames.SIZE, checkType:CheckTypes.BOOLEAN},
      {checkName:CheckNames.COLOR, checkType:CheckTypes.TRISTATE}
  ],
  LARGE: [
      {checkName:CheckNames.CATEGORY, checkType:CheckTypes.BOOLEANWITHTEXT},
      {checkName:CheckNames.CONDITION, checkType:CheckTypes.SINGLECHOICE},
      {checkName:CheckNames.BRAND, checkType:CheckTypes.BOOLEAN},
      {checkName:CheckNames.COLOR, checkType:CheckTypes.TRISTATE},
      {checkName:CheckNames.ACCESSORIES, checkType:CheckTypes.MULTICHOICE}
  ],
  BEAUTY: [
      {checkName:CheckNames.CATEGORY, checkType:CheckTypes.BOOLEANWITHTEXT},
      {checkName:CheckNames.CONDITION, checkType:CheckTypes.SINGLECHOICE},
      {checkName:CheckNames.BRAND, checkType:CheckTypes.BOOLEAN},
      {checkName:CheckNames.COLOR, checkType:CheckTypes.TRISTATE},
  ]

}