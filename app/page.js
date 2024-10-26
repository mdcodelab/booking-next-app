"use client";
import React from 'react';
import Toast from './(components)/Toast';
import { useState } from 'react';
import { useGlobalContext } from '@/context/context';

function Page() {
const {handleCloseToast, handleShowToast, showToast, type}=useGlobalContext();
  return (
    <div>
      Home page
      
      <button onClick={handleShowToast}>Show Toast</button>

      {showToast && <Toast message="This is a toast message!" onClose={handleCloseToast} type={type}/>}
    </div>
  )
}

export default Page
