"use client";

import styles from "./page.module.css";
import { HeaderImg } from "./components/Homepage/HomeImg/HomeImg";
import ChatIcon from "./components/Chat/ChatIcon/ChatIcon";
import ChatBox from "./components/Chat/ChatBox/ChatBox";

export default function Home() {
  
  
  return (
    <>
      <ChatIcon />
      <ChatBox />
      <section className={styles.main}>
        <HeaderImg 
          src="electronics"
          text="Electronics"
          color="white"
          pos="l"
        />
        <HeaderImg 
          src="jewelery"
          text="Jewelery"
          color="white"
          pos="r"
        />
        <HeaderImg 
          src="menclothing"
          text="Men Clothing"
          color="black"
          pos="l"
        />
        <HeaderImg 
          src="womenclothing"
          text="Women Clothing"
          color="black"
          pos="r"
        />
      </section>
    </>
  );
}
