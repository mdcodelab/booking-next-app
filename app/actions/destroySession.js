"use server";

import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

export async function destroySession () {
    const { account } = await createAdminClient();

}
