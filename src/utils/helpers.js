export const removeCompanyName = (inputString, replacement) => {
  var resultString = inputString.replace(/\[COMPANYNAME\]/g, replacement);
  return resultString;
};

export function renderAuth() {
  // const isUserInLocalStorage = localStorage.getItem("sb-fbmnthpwcbpdarnmlxda-auth-token");
  // let localAuthItem = JSON.parse(isUserInLocalStorage)
  return localStorage.getItem("sb-fbmnthpwcbpdarnmlxda-auth-token");
  // return localAuthItem = JSON.parse(isUserInLocalStorage)
}
