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
  BRAND: {key: "BRAND", value: "Is the brand of the item correct ?"},
  COLOR: {key: "COLOR", value: "Is the color of the item correct ?"},
  SIZE:  {key: "SIZE", value: "Is the size of the item correct ?"},
  ACCESSORIES : {key: "ACCESSORIES", value: "Are the following accessories present ?"},
  SEAL : {key: "SEAL", value: "Is the item sealed?"}
}

export const OpenBoxChecks = {
  MOBILE: [
      {checkName:CheckNames.CATEGORY.key, checkType:CheckTypes.BOOLEANWITHTEXT.key},
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.SINGLECHOICE.key},
      {checkName:CheckNames.BRAND.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.SEAL.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.COLOR.key, checkType:CheckTypes.TRISTATE.key},
      {checkName:CheckNames.ACCESSORIES.key, checkType:CheckTypes.MULTICHOICE.key}

  ],
  APPAREL: [
      {checkName:CheckNames.CATEGORY.key, checkType:CheckTypes.BOOLEANWITHTEXT.key},
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.SINGLECHOICE.key},
      {checkName:CheckNames.BRAND.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.SIZE.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.COLOR.key, checkType:CheckTypes.TRISTATE.key}
  ],
  LARGE: [
      {checkName:CheckNames.CATEGORY.key, checkType:CheckTypes.BOOLEANWITHTEXT.key},
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.SINGLECHOICE.key},
      {checkName:CheckNames.BRAND.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.COLOR.key, checkType:CheckTypes.TRISTATE.key},
      {checkName:CheckNames.ACCESSORIES.key, checkType:CheckTypes.MULTICHOICE.key}
  ],
  BEAUTY: [
      {checkName:CheckNames.CATEGORY.key, checkType:CheckTypes.BOOLEANWITHTEXT.key},
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.SINGLECHOICE.key},
      {checkName:CheckNames.BRAND.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.COLOR.key, checkType:CheckTypes.TRISTATE.key},
  ]
}