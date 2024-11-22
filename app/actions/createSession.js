"use server";

import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

export async function createSession (email, password) {

   if(!email || !password) {
    throw new Error ("Email or password missing.");
   }

   //create account instance
   const {account}=await createAdminClient();
   

   try {
    const session= await account.createEmailPasswordSession(email, password);
    //create cookie
cookies().set("appwrite-session", session-secret, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(session.expire),
    path: "/"
})

console.log("Session", session);

return {message: "Session created."}
   } catch (error) {
     return {message: "Session failed."}
   }
}