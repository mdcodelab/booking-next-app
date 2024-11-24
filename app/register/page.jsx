
"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUser } from '../actions/createUser';
import { useRouter } from 'next/navigation';

function RegisterPage() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [rePassword, setRePassword]=useState("");

const router = useRouter();

  async function handleSubmit (e) {
    e.preventDefault();
    const response = await createUser(name, email, password, rePassword);
    if(response.success) {
      toast.success(response.success);
      router.push("/login");
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.error("An unexpected error occurred.")
    }
  }

  return (
    <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Register
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name" value={name} placeholder="Your name..."
                className="border rounded w-full py-2 px-3"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email" value={email} placeholder="Your email..."
                className="border rounded w-full py-2 px-3"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password" value={password} placeholder="Set password ..."
                className="border rounded w-full py-2 px-3"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="rePassword"
                className="block text-gray-700 font-bold mb-2"
                >Confirm Password</label
              >
              <input
                type="password"
                id="rePassword"
                name="rePassword" value={rePassword} placeholder="Conform password ..."
                className="border rounded w-full py-2 px-3"
                onChange={(e)=> setRePassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Register
              </button>

              <p>
                Have an account?
                <Link href="/login" className="text-blue-500"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default RegisterPage;
