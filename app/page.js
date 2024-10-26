"use client";
import React from 'react';
import Toast from './(components)/Toast';
import { useState } from 'react';

function Page() {
  const[showToast, setShowToast]=useState(false);
  const [type, seType]=useState("error");

  const handleShowToast = () => {
setShowToast(!showToast);
  }

  const handleCloseToast = ()=> {
    setShowToast(false);
  }


  return (
    <div>
      Home page
      
      <button onClick={handleShowToast}>Show Toast</button>

      {showToast && <Toast message="This is a toast message!" onClose={handleCloseToast} type={type}/>}
    </div>
  )
}

export default Page
