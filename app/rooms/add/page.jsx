"use client";
import Heading from "@/app/(components)/Heading";
import { createRoom } from "@/app/actions/createRoom";
 import { toast } from "react-toastify";
 import { useState } from "react";

function AddRoomsPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sqft, setSqft] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [price_per_hour, setPrice] = useState(0);
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("");
    const [amenities, setAmenities] = useState("");
    const [image, setImage]=useState("");

    // for images
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = () => {
    //         setImage(reader.result);
    //       };
    //       reader.readAsDataURL(file);
    //     }
    //   };

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await createRoom(
        name,
        description,
        sqft,
        capacity,
        price_per_hour,
        address,
        location,
        availability,
        amenities,
        //image
      );
      if (result.success) {
        toast.success("Room created successfully.");
      } else {
        toast.error(result.error);
      }
    };

  
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
    <Heading title="Add a Room"></Heading>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Room Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3" value={name}
            placeholder="Enter a name (Large Conference Room)" onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full h-24 py-2 px-3" value={description}
            placeholder="Enter a description for the room" onChange={(e)=> setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="sqft" className="block text-gray-700 font-bold mb-2">
            Square Feet
          </label>
          <input
            type="number"
            id="sqft"
            name="sqft" value={sqft}
            className="border rounded w-full py-2 px-3"
            placeholder="Enter room size in ft" onChange={(e)=>setSqft(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity" value={capacity}
            className="border rounded w-full py-2 px-3"
            placeholder="Number of people the room can hold" onChange={(e)=>setCapacity(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price_per_hour"
            className="block text-gray-700 font-bold mb-2"
          >
            Price Per Hour
          </label>
          <input
            type="number"
            id="price_per_hour"
            name="price_per_hour" value={price_per_hour}
            className="border rounded w-full py-2 px-3"
            placeholder="Enter price per hour" onChange={(e)=> setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address" value={address}
            className="border rounded w-full py-2 px-3" onChange={(e)=> setAddress(e.target.value)}
            placeholder="Enter full address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="border rounded w-full py-2 px-3" value={location}
            placeholder="Location (Building, Floor, Room)" onChange={(e)=> setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700 font-bold mb-2">
            Availability
          </label>
          <input
            type="text"
            id="availability"
            name="availability" value={availability}
            className="border rounded w-full py-2 px-3"
            placeholder="Availability (Monday - Friday, 9am - 5pm)" onChange={(e)=> setAvailability(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amenities" className="block text-gray-700 font-bold mb-2">
            Amenities
          </label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            className="border rounded w-full py-2 px-3" value={amenities}
            placeholder="Amenities CSV (projector, whiteboard, etc.)" onChange={(e)=> setAmenities(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-8">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image" value={image}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRoomsPage;
