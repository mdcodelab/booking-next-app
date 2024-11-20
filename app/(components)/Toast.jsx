"use client";
import React from 'react';
import { useEffect } from 'react';

const Toast = ({ message, onClose, type }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); 
  
      return () => clearTimeout(timer);
    }, [onClose]);

    useEffect(()=> {
      console.log("Message:", message);
    }, [message])

    const backgroundColor = type === "success" ? "bg-green-300" : "bg-red-300";
    console.log(message);
  
    return (
      <div className={`toast ${backgroundColor}`}>
        {message}
        <button onClick={onClose}>X</button>
      </div>
    );
  };
  
  export default Toast;
