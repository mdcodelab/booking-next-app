"use client";
import React from "react";
import { useState } from "react";

const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
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
    <ToastContext.Provider
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
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
export const useToastContext = () => {
  return React.useContext(ToastContext);
};