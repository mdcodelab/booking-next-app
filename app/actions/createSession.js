"use server";

import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

export async function createSession(email, password) {
  if (!email || !password) {
    return { success: false, error: "Email or password missing." };
  }

  const { account } = await createAdminClient();

  try {
    // Creează o sesiune de autentificare
    const session = await account.createEmailPasswordSession(email, password);

    // Creează cookie-ul
    cookies().set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    console.log("Session created:", session);
    
    return { success: true, message: "Session created successfully." };
  } catch (error) {
    console.error("Error creating session:", error);

    // Gestionare erori specifice
    if (error.message.includes("Invalid credentials")) {
      return { success: false, error: "Wrong email or password." };
    }

    // Alte erori
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
