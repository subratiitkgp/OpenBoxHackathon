'use strict';

export const Category = {
  APPAREL: {key:"APPAREL",value:"Apparel"},
  MOBILE: {key:"MOBILE", value:"Mobile phone"}
}

export const CheckTypes = {
  MULTICHOICE: {key: "MULTICHOICE", value: "Multi-Choice"},
  BOOLEAN: {key: "BOOLEAN", value: "Boolean"},
  BOOLEANWITHDATA: {key: "BOOLEANWITHDATA", value: "Boolean with data"},
  BOOLEANWITHIMAGE: {key: "BOOLEANWITHIMAGE", value: "Boolean with image"}
}

export const CheckNames = {
  CONDITION: {key: "CONDITION", value: "Is the condition of the item good ?"},
  IMAGE: {key: "IMAGE", value: "Does the item match the image ?"},
  SERIAL: {key: "SERIAL", value: "Does the serial number of the device match ?"},
  ACCESSORIES : {key: "ACCESSORIES", value: "Are the following accessories present ?"},
}

export const SmartChecks = {
  MOBILE: [
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.IMAGE.key, checkType:CheckTypes.BOOLEANWITHIMAGE.key},
      {checkName:CheckNames.SERIAL.key, checkType:CheckTypes.BOOLEANWITHDATA.key},
      {checkName:CheckNames.ACCESSORIES.key, checkType:CheckTypes.MULTICHOICE.key}
  ],
  APPAREL: [
      {checkName:CheckNames.CONDITION.key, checkType:CheckTypes.BOOLEAN.key},
      {checkName:CheckNames.IMAGE.key, checkType:CheckTypes.BOOLEANWITHIMAGE.key}
  ]
}
