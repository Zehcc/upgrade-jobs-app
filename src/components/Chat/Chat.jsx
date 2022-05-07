import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { API } from "../../shared/services/api";

const Chat = ({ user, room, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [hide, setHide] = useState(true);
  const [exist, setExist] = useState(false);
  const [id, setID] = useState("");

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
      const chatDB = {
        room: room,
        messages: [...messageList, messageData],
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      console.log(exist, "pre");
      if (!exist) {
        API.post(`/chats`, chatDB).then((res) => {
          console.log("post");
          setID(res.data._id);
          setExist(true);
        });
      } else if (exist) {
        API.patch(`/chats/${id}`, chatDB).then((res) => {
          console.log(res, "patch");
        });
      }

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
    API.get(`/chats/${room}`).then((res) => {
      if (res.data) {
        setMessageList(res.data.messages);
        setID(res.data._id);
        setExist(true);
      }
    });
  }, []);

  return (
    <>
      {messageList.length === 0 && user.includes("@") ? (
        <button className='show-btn' onClick={showChat}>
          Abrir chat
        </button>
      ) : messageList.length > 0 ? (
        <button
          className='show-btn'
          onClick={() => {
            showChat();
            setExist(true);
          }}
        >
          Abrir chat
        </button>
      ) : (
        <p className='no-messages'>
          La empresa aun no te ha escrito ningun mensaje
        </p>
      )}
      {!hide && (
        <div className='chat-window'>
          <div className='chat-header'>
            <p>UpgradeJobs Chat</p>
          </div>
          <div className='chat-body'>
            <ScrollToBottom className='message-container'>
              {messageList.map((messageContent, index) => {
                return (
                  <div
                    key={index}
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
