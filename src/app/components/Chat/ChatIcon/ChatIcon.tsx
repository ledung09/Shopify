"use client"

import Image from "next/image"
import styles from "./chaticon.module.css"

interface Props {
  onClick: any;
}

export default function ChatIcon(props: Props) {
  return (
    <div 
      className={styles.chat_icon}
      onClick={props.onClick}
    >
      <Image
        src="chatbot.png"
        width={0}
        height={0}
        style={{
          width: "40px",
          height: "37px",
          objectFit: "contain",
        }}
        alt="chatbot"
      />
    </div>
  )
}
