import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

      const expirationTime = new Date().getTime() + 5 * 60 * 1000;
  localStorage.setItem("expirationTime", expirationTime.toString());
  };

  const logoutHandler = () => {
    setToken(null);
      localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  };

  // 🔥 Validate token with Firebase on app load
useEffect(() => {
  const storedToken = localStorage.getItem("token");
  const storedExpiration = localStorage.getItem("expirationTime");

  if (!storedToken || !storedExpiration) {
    return;
  }

  const currentTime = new Date().getTime();

  if (currentTime >= +storedExpiration) {
    // token expired
    logoutHandler();
  } else {
    // still valid → keep token
    setToken(storedToken);
  }
}, []);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;