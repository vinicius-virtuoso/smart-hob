export const isAuthenticated = () => {
  let getToken = window.localStorage.getItem("@Smart-hob/token");

  if (getToken) {
    return true;
  } else {
    return false;
  }
};
