"use server";

import { createAdminClient } from "@/config/appwrite";
import { checkAuth } from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

export async function createRoom(
    name, 
    description, 
    sqft, 
    capacity, 
    price_per_hour,
    address, 
    location, 
    availability, 
    amenities
  ) {
    const { databases, storage } = await createAdminClient();
  
    try {
      const { user } = await checkAuth();
      if (!user) {
        return { error: "You must be logged in to create a room." };
      }
  
      let imageID = null; // ID-ul imaginii după upload în Appwrite
  
      // // Dacă există o imagine, salveaz-o în Appwrite
      // if (base64Image) {
      //   const imageBuffer = Buffer.from(base64Image.split(",")[1], "base64"); // Decodifică Base64
      //   const response = await storage.createFile(
      //     "rooms", // ID-ul bucket-ului de imagini în Appwrite
      //     ID.unique(), 
      //     imageBuffer, 
      //     ["image/jpeg", "image/png"] // Tipuri acceptate
      //   );
      //   imageID = response.$id; // Salvează ID-ul imaginii
      // }
  
      // Creează documentul pentru cameră
      const newRoom = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        ID.unique(),
        {
          user_id: user.id,
          name,
          description,
          sqft,
          capacity,
          price_per_hour,
          address,
          location,
          availability,
          amenities,
          //image_id: imageID, // Salvează ID-ul imaginii asociate
        }
      );
  
      //revalidatePath("/", "layout");
      return { success: true };
    } catch (error) {
      console.error(error);
      return { error: "Creating room failed." };
    }
  }
  