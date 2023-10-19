"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Error from "next/error";
import Item from "../components/Items/Item/Item";
import ItemDisplay from "../components/Items/ItemDisplay/ItemDisplay";

interface item {
  id: number;
  title: string;
  price: number;
  des: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  category?: string;
  description: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [itemList, setItemList] = useState<item[]>([]);

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${slug}`
      );
      setItemList(res.data);
      // console.log(res.data)
    };
    apiCall();
  }, []);

  return (
    <div className={styles.item_list}>
      {itemList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            img_src={item.image}
            slug={slug}
          />
        );
      })}
    </div>
  );
}
