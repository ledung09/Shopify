"use client"

import { use, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatIcon from "../ChatIcon/ChatIcon";

export default function Chat() {
  const [chatOn, setChatOn] = useState<boolean>(true)
  return (
    <>
      <ChatIcon 
        onClick={() => {
          setChatOn((p) => !p)
        }}
      />
      <ChatBox 
        show={chatOn}
        setShow={setChatOn}
      />
    </>
  )
}
