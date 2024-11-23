"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

export async function destroySession() {
  // Preluare cookie
  const sessionCookie = cookies().get("appwrite-session");

  console.log("Session-cookie:", sessionCookie);

  if (!sessionCookie) {
    return { success: false, error: "No session found." };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    //console.log("Account", account.get());

    // Setare cookie expirat - delete cookie
    cookies().set("appwrite-session", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });

    return { success: true, message: "Logged out successfully." };
  } catch (error) {
    console.error("Error during logout:", error);
    return { success: false, message: "Destroy session failed." };
  }
}
