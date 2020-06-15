/**
 *
 * @param {value} value
 * @param {validationsObj} validationsObj -> each key in the object should also contain an object of property onError(error text) and logic(a func that returns true/false depending on value or not)
 * @returns an obj which contains validationsObj keys as key and onError text as value if  logic function return true
 */

const formValidator = (value, validationsObj) => {
  let errObj = {};
  for (let validateKey in validationsObj) {
    if (validationsObj[validateKey].logic(value)) {
      errObj[validateKey] = validationsObj[validateKey].onError;
    }
  }
  return errObj;
};

export default formValidator;
