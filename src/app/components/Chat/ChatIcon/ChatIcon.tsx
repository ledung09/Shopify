import Image from "next/image"
import styles from "./chaticon.module.css"

export default function ChatIcon() {
  return (
    <div className={styles.chat_icon}>
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
