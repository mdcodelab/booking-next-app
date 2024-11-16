"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getSingleRoom (id) {
    try {
        const {databases}=await createAdminClient();

        //fetch rooms
        const room=await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
            id
        );

        //revalidate
       // revalidatePath("/", "layout");
        return room;
    } catch (error) {
        console.log("Failed to fetch room", error);
        //redirect("/error");
        return [];
    }
}

