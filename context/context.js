"use client";
import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //STATE VALUES
  //toast
  const [message, setMessage]=useState("");
  const[showToast, setShowToast]=useState(false);
  const [type, setType]=useState("success");


  //FUNCTIONS
  //Toast
  const handleShowToast = () => {
    setShowToast(!showToast);
      }
    
      const handleCloseToast = ()=> {
        setShowToast(false);
      }

  return (
    <AppContext.Provider
      value={{
        setMessage,
        handleShowToast,
        handleCloseToast,
        showToast,
        setShowToast,
        type, 
        setType





      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};