"use client";
import React from 'react';
import { AuthProvider } from '@/context/authContext';

function AuthWrapper({children}) {
  return (
    <AuthProvider>{children}</AuthProvider>
  )
}

export default AuthWrapper
