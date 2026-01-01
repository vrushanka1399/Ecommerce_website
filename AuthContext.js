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
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // ?? Validate token with Firebase on app load
  useEffect(() => {
    const validateToken = async () => {
      if (!storedToken) return;

      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=YOUR_FIREBASE_API_KEY",
          {
            method: "POST",
            body: JSON.stringify({
              idToken: storedToken,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          // ? invalid / expired / revoked ? log out user
          logoutHandler();
          return;
        }

        // ? token valid ? keep logged in (nothing else to do)
      } catch (err) {
        // ? network / error ? log out to be safe
        logoutHandler();
      }
    };

    validateToken();
  }, []); // run only once on app load

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