"use client"

import { useEffect, useState, useRef } from "react";
import styles from "./chatbot.module.css";
import Image from "next/image";
import ScrollableFeed from "react-scrollable-feed";
import axios from 'axios';
import ReactLoading from 'react-loading';

interface ChatMessage {
  type: string;
  message: string;
}

interface Props {
  show: boolean;
  setShow: any;
}

export default function ChatBox(props: Props) {
  const [form, setForm] = useState<string>("");
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "chatbot",
      message: "Type something... 👋",
    }
  ]);

  const updateMessage = () => {
    if (form !== "") {
  
      const newMessage = {
        type: "human",
        message: form,
      };
  
      const updatedMessages: ChatMessage[] = [...messages, newMessage];
  
      setMessages(updatedMessages); // Set old chat messages first
      setForm("")
      setIsLoading(true);


      axios.post('http://localhost:5000/user_input', {
        message: form
      })
      .then(function (response) {
  
        const botMessage = {
          type: "chatbot",
          message: response.data.response,
        };
  
        const updatedMessagesWithBotResponse: ChatMessage[] = [...updatedMessages, botMessage];
        setIsLoading(false);
        setMessages(updatedMessagesWithBotResponse);
        
      })
      .catch(function (error) {
        const botMessage = {
          type: "chatbot",
          message: "Connection error 🛜, please try again! ",
        };
  
        const updatedMessagesWithBotResponse: ChatMessage[] = [...updatedMessages, botMessage];
        setIsLoading(false);
        setMessages(updatedMessagesWithBotResponse);
      });
    }
  };
  
 
  return (
    <div 
      className={styles.chatbox_container}
      style={{
        display: props.show ? "flex" : "none"
      }}
    >
      <div className={styles.chatbox_header}>
        <div className={styles.avatar}>
          <Image
            src="botavatar.png"
            width={0}
            height={0}
            style={{
              width: "26px",
              height: "26px",
              objectFit: "contain",
            }}
            alt="chatbot"
          />
        </div>
        <p className={styles.botname}>BotShopify</p>
        <button onClick={() => {
          props.setShow(false)

        }}>✖</button>
      </div>
      <ScrollableFeed>
        <div className={styles.chatbox_chatsection}>
          {messages.map((message_obj, idx, arr) => {
            let yMargin =
              idx >= 1 && arr[idx].type !== arr[idx - 1].type ? "5px" : "0px";
            yMargin = idx === 0 ? "10px" : yMargin;

            return (
              <div
                key={idx}
                className={styles.chat_container}
                style={{
                  justifyContent:
                    message_obj.type === "chatbot" ? "flex-start" : "flex-end",
                  marginTop: yMargin,
                }}
              >
                {message_obj.type === "chatbot" ? (
                  <div className={styles.chat_avatar}>
                    <Image
                      src="botavatar.png"
                      width={0}
                      height={0}
                      style={{
                        width: "25px",
                        height: "25px",
                        objectFit: "contain",
                      }}
                      alt="chatbot"
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                {
                  message_obj.type === "human" ? 
                  <div
                    key={idx}
                    className={styles.chat_bubble}
                    style={{
                      display: "block",
                      width: "fit-content",
                      float: "right",
                      backgroundColor: "#EE4D2D",
                      color: "white",
                    }}
                  >
                    {message_obj.message}
                  </div>
                    :
                  <div
                    key={idx}
                    className={styles.chat_bubble}
                    style={{
                      display: "block",
                      width: "fit-content",
                      float: "left",
                      backgroundColor: "#E4E6EB",
                      color: "black",
                    }}
                    dangerouslySetInnerHTML={{ __html: message_obj.message }} 
                  >
                  </div>

                }                
              </div>
            );
          })}

        
        </div>
        {
        isloading ? 
        <div className={styles.chat_loading}>
          <div className={styles.chat_avatar}>
            <Image
              src="botavatar.png"
              width={0}
              height={0}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
              }}
              alt="chatbot"
            />
          </div>
          <div 
            className={styles.chat_bubble_loading }
            style={{
              display: "block",
              width: "fit-content",
              backgroundColor: "#E4E6EB",
              color: "black"
            }}
          >
            <ReactLoading type="bubbles" color="#A1A7B0" height={30} width={30}/>
          </div>
        </div>
          :
        <div></div>
      }
      </ScrollableFeed>
      
          
      <div className={styles.chatbox_footer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={form}
          onChange={(e) => {
            setForm(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              updateMessage();
            }
          }}
        />
        <div className={styles.send_btn} onClick={() => {
            updateMessage();
          }}
        >
          <Image
            src="sendbtn.png"
            width={0}
            height={0}
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
            alt="send"
          />
        </div>
      </div>
    </div>
  );
}
