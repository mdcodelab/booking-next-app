import React from 'react';
//import { rooms } from '@/data/rooms';
import Heading from '@/app/(components)/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import { getAllRooms } from '@/app/actions/getAllRooms';
import { getSingleRoom} from '@/app/actions/getSingleRoom';
import Form from '@/app/(components)/Form';

async function RoomPage({params}) {
  const rooms= await getAllRooms();
    const {id}= await params;
    const room = rooms.find((room) => room.$id === id);
    //const room=getSingleRoom(id);
    //console.log(room);
    if(!room) {
        return <Heading title="Room Not Found."></Heading>
    }

  return (
    <>
      <Heading title={room.name}></Heading>
      <div className="bg-white shadow rounded-lg p-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaChevronLeft className="inline mr-1"></FaChevronLeft>
          <span className="ml-2">Back to Rooms</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={`/assets/${room.image}`} width={400} height={100}
            alt={room.name}
            className="w-full sm:w-1/3 h-64 object-cover rounded-md"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-600 mb-4">{room.description}</p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size:</span> {room.sqft} ft
              </li>
              <li>
                <span className="font-semibold text-gray-800">Availability: </span>
                {room.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>
                {room.price_per_hour}/hour
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address:</span> {room.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">Book this Room</h2>
         <Form></Form> 
        </div>
      </div>
    </>
  )
}

export default RoomPage;