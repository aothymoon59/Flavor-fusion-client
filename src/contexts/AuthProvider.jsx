import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const userInfo = { name: "Boltu" };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
