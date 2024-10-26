"use client";
import React from 'react';
import Toast from './(components)/Toast';
import { useState } from 'react';
import { useToastContext } from '@/context/toastContext';

function Page() {
const {handleCloseToast, handleShowToast, showToast, type}=useToastContext();
  return (
    <div>
      Home page
      
      <button onClick={handleShowToast}>Show Toast</button>

      {showToast && <Toast message="This is a toast message!" onClose={handleCloseToast} type={type}/>}
    </div>
  )
}

export default Page
