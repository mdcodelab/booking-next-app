"use client";
import React from "react";
import { useState, useEffect} from "react";
import { checkAuth } from "@/app/actions/checkAuth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  //STATE VALUES
  const [isAuthenticated, setIsAuthenticated]=useState(false);
  const[currentUser, setCurrentUser]=useState(null);

  //FUNCTIONS

    useEffect(()=> {
      const checkAuthentication = async () => {
        const {isAuthenticated, user} = await checkAuth();
        setIsAuthenticated(isAuthenticated);
        setCurrentUser(user);
      }
      checkAuthentication();
      }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser
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