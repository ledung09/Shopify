"use client"

import { useCartContext } from "@/app/Context/CartContext";
import styles from "../ItemDisplay/itemdisplay.module.css"
import Image from "next/image";
import { useState } from "react";

interface Props {
  id: number;
  title: string;
  price: number;
  des: string;
  rating: {
    rate: number;
    count: number;
  };
  img_src: string;
}

export default function ItemDisplay(props: Props) {
  const { id, title, price, des, rating, img_src} = props
  const [addCart, setAddCart] = useState<boolean>(false)
  const { cart, setCart } = useCartContext();

  return (
    <>
      <div className={styles.display_container}>
        {
          img_src &&
          <Image
            src={img_src}
            width={0}
            height={0}
            style={{
              width: "30%",
              height: "200px",
              objectFit: "contain",
            }}
            priority={true}
            alt={title}
            className={styles.display_image}
          />

        }
        <div className={styles.display_info}>
          <p className={styles.display_title}>{ title }</p>
          <h4 className={styles.display_rating_stat}>
            Rating: {rating.rate} <span style={{ color: "#FFC400" }}>★</span>
            &nbsp; ({rating.count})
          </h4>
          <h2 className={styles.display_price}>${ price }</h2>
          
          {
            (addCart || cart[id-1] === true) ? 
            <button style={{ opacity: "0.6", cursor: "not-allowed" }}>
              Item added!
            </button>
              :
            <button 
              className={styles.active_btn} 
              onClick={() => { 
                setAddCart(true) 
                setCart((p) => {
                  let cart_cpy = [...p];
                  cart_cpy[id-1] = true;
                  return cart_cpy;
                })
              }}
            >
              Add to cart
            </button>
          }
          
        </div>
      </div>
      <hr style={{ margin: "35px 0px" }}/>
      <h2 style={{ fontSize: "24.5px" }}>
        Description <span style={{ fontSize: "19px", verticalAlign: "2px"}}>📙</span>
      </h2>
      <p className={styles.display_des}>{ des }</p>

    </>
  )
}
