////axios setup ----- #########################################################
import axios from "axios";

const usersList = axios.create({
  baseURL: process.env.REACT_APP_USERS_BASE_URL,
});

////exported functions ----- ##################################################

export async function addUser_DB(userObj) {
 
  const res = await usersList
    .post("/users", userObj)
    .catch((e) => console.log("Error: ", e.message));
  return res.data;
  //DB returns complete user object to be stored in context
}

export async function loginAtempt_DB(username, password) {
  const loginInfo = { username: username, password: password };

  const checkPassword = await usersList
    .post("/login", loginInfo)
    .catch((e) => console.log("Error: ", e.message));

  if (Object.keys(checkPassword.data) !== 0) {
    return checkPassword.data;
  } else {
    return null;
  }
  //if authenticated in db, return user object, else, return null
}

export async function addPurchaseToHistory_DB(userObj, itensList) {
  const newPurchase = {
    purchase_id: new Date().toISOString(),
    movies: itensList,
  };

  const res = await usersList
    .post("/users/history", newPurchase)
    .catch((e) => console.log("Error: ", e.message));

  return res.data;
  //DB returns complete user object updated to be stored in context
}
