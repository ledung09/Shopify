import { useEffect, useState, useRef } from "react";
import styles from "./chatbot.module.css";
import Image from "next/image";
import ScrollableFeed from "react-scrollable-feed";


interface ChatMessage {
  type: string;
  message: string;
}


export default function ChatBox() {
  const [form, setForm] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "chatbot",
      message: "Hello",
    },
    {
      type: "chatbot",
      message:
        "Hi there! I'm your friendly chatbot. How can I assist you today?",
    },
    {
      type: "human",
      message: "What services do you offer?",
    },
    {
      type: "chatbot",
      message:
        "We offer a wide range of services including web development, mobile app development, and AI solutions.",
    },
    {
      type: "human",
      message: "What services do you offer?",
    },
    {
      type: "chatbot",
      message:
        "We offer a wide range of services including web development, mobile app development, and AI solutions.",
    },
  ]);

  const updateMessage = () => {
    if (form != "") {
      var updatedMessages: ChatMessage[] = [
        ...messages,
        {
          type: "human",
          message: `${form}`,
        },
      ];
      setMessages(updatedMessages);
      setForm("");
    }
  };


  
 
  return (
    <div className={styles.chatbox_container}>
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
        <button onClick={() => {}}>✖</button>
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
                    message_obj.type === "chatbot" ? "start" : "end",
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
                  <></>
                )}
                <div
                  key={idx}
                  className={styles.chat_bubble}
                  style={{
                    display: "block",
                    width: "fit-content",
                    float: message_obj.type === "human" ? "right" : "left",
                    backgroundColor:
                      message_obj.type === "human" ? "#EE4D2D" : "#E4E6EB",
                    color: message_obj.type === "human" ? "white" : "black",
                  }}
                >
                  {message_obj.message}
                </div>
              </div>
            );
          })}
        </div>
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
            if (e.key === "Enter") updateMessage();
          }}
        />
        <div className={styles.send_btn} onClick={() => updateMessage()}>
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
