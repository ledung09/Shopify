import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cartitem.module.css";
import Image from "next/image";

interface item {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

interface Props {
  key: number;
  id: number;
  setCart: any;
}

export default function CartItem(props: Props) {
  const { id, setCart } = props;
  const [item, setItem] = useState<item>({
    title: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    image: "",
  });

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setItem(res.data);
    };
    apiCall();
  }, []);

  return (
    <div className={styles.cart_item}>
      <Image
        src={item.image}
        width={0}
        height={0}
        style={{
          width: "100px",
          height: "85%",
          objectFit: "contain",
        }}
        priority={true}
        alt={item.title}
      />
      <div className={styles.item_info}>
        <p className={styles.item_title}>
          {item.title.split(" ").slice(0, 8).join(" ")}...
        </p>
        <h4 className={styles.item_rating_stat}>
          Rating: {item.rating.rate} <span style={{ color: "#FFC400" }}>★</span>
          &nbsp; ({item.rating.count})
        </h4>
        <h2 className={styles.item_price}>${item.price}</h2>
      </div>
      <button
        onClick={() => {
          setCart((p:boolean[]) => {
          let cart_cpy = [...p];
          cart_cpy[id - 1] = false;
          return cart_cpy;
          })
        }}
      >
        ✖
      </button>
    </div>
  );
}
