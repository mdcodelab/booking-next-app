"use client";
import React from "react";
import { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  //STATE VALUES


  //FUNCTIONS
  

  return (
    <AuthContext.Provider
      value={{
        





      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
export const useAuthContext = () => {
  return React.useContext(AuthContext);
};