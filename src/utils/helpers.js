export const removeCompanyName = (inputString, replacement) => {
  var resultString = inputString.replace(/\[COMPANYNAME\]/g, replacement);
  return resultString;
};
