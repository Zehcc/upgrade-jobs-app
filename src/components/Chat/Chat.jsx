import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ user, room, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [hide, setHide] = useState(true);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: user,
        text: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);

      setCurrentMessage("");
    }
  };
  const showChat = () => {
    setHide(!hide);
  };
  const joinRoom = () => {
    if (user && room) {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    joinRoom();
    socket.on("receive", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <>
      <button className='show-btn' onClick={showChat}>
        Abrir chat
      </button>
      {!hide && (
        <div className='chat-window'>
          <div className='chat-header'>
            <p>Live Chat</p>
          </div>
          <div className='chat-body'>
            <ScrollToBottom className='message-container'>
              {messageList.map((messageContent) => {
                return (
                  <div
                    className='message'
                    id={user === messageContent.author ? "you" : "other"}
                  >
                    <div>
                      <div className='message-content'>
                        <p>{messageContent.text}</p>
                      </div>
                      <div className='message-meta'>
                        <p id='time'>{messageContent.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className='chat-footer'>
            <input
              type='text'
              value={currentMessage}
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
