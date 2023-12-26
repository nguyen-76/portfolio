import React, { useState } from "react";
import auth from "./Auth";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);
  let signin = (newUser) => {
    setUser(newUser);
  };

  let signout = (callback) => {
    return auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;