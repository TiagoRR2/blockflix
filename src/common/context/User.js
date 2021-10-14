import {
  addPurchaseToHistory_DB,
  addUser_DB,
  loginAtempt_DB,
} from "common/api/user";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext;
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setLogin,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { isLoggedIn, setLogin, userInfo, setUserInfo } =
    useContext(UserContext);

  async function addUser(name, username, email, password) {
    const newUser = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    const newUserCreated = await addUser_DB(newUser).catch((e) =>
      console.log("Error: ", e.message)
    );

    if (newUserCreated) {
      setUserInfo(newUserCreated);
      setLogin(true);
    }
  }

  async function verifyUser(username, password) {
    const loginInfo = await loginAtempt_DB(username, password).catch((e) =>
      console.log("Error: ", e.message)
    );

    if (loginInfo) {
      setUserInfo(loginInfo);
      setLogin(true)
    }
  }

  async function addPurchaseToHistory(itensList) {
    const historyUpdate = await addPurchaseToHistory_DB(
      userInfo,
      itensList
    ).catch((e) => console.log("Error: ", e.message));

    if (historyUpdate) setUserInfo(historyUpdate);
  }

  function logout() {
    setLogin(false);
    setUserInfo({});
  }

  return {
    isLoggedIn,
    userInfo,
    addUser,
    verifyUser,
    logout,
    addPurchaseToHistory,
  };
};
