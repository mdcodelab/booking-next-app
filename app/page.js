import React from 'react';
import { rooms } from "../data/rooms.js";
import RoomCard from './(components)/RoomCard.jsx';
import Heading from './(components)/Heading.jsx';

function Page() {
  console.log(rooms);

  return (
    <>
    <Heading title="Available rooms"></Heading>
      {
        rooms.length > 0 
        ? rooms.map((room) => {
            return (
              <div key={room.$id}>
                <RoomCard room={room}></RoomCard>
              </div>
            );
          })
        : <div>No rooms available at the moment.</div>
      }
    </>
  );
}

export default Page;
