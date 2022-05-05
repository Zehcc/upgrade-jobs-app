import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

const Chat = ({ user, room }) => {
  console.log(user);
  console.log(room);
  console.log(socket);
  const joinRoom = () => {
    if (user && room) {
      socket.emit('join_room', room);
    }
  };
  useEffect(() => {
    joinRoom();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Chat;
