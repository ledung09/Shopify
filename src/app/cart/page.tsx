"use client"

import { useCartContext } from "../Context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import styles from "./page.module.css"

export default function Page() {
  const { cart, setCart } = useCartContext();
  return (
    <>
      <h1 className={styles.cart_title}>🛒 Item counts: { cart.filter(item => item === true).length }</h1>
      {cart.filter(item => item === true).length == 0 ? 
          <p className={styles.cart_txt}>Nothing to show here 😓</p>
      :
        cart.map((c, idx) => {
          console.log(c)
          return (
            c === true ? 
            <CartItem 
              key={idx}
              id={idx+1}
              setCart={setCart}
            />
             : 
            <div key={idx}></div>
          )
        })
      }
    </>
  )
}
