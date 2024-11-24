"use server";
import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";

export async function createUser (name, email, password, rePassword) {
    if (!name || !email || !password) {
        return { error: "Name, email or password missing." };
      }

      if(password.length < 8) {
        return  {error: "Password must be at least 8 characters long." };
      }

      if(password !== rePassword) {
        return {error: "Passwords must match."}
      }

      const { account } = await createAdminClient();
      
      try {
            //create user
            await account. create(ID.unique(), email, password, name);

            return {success: "Account created successfully."}
      } catch (error) {
        console.log("Registration error:", error);
        return {error: "Could not register the user. Please try again."}
      }
}