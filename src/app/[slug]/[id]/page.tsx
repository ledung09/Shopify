"use client"

import styles from "./page.module.css"

import ItemDisplay from "@/app/components/ItemDisplay/ItemDisplay";
import axios from "axios";
import { useEffect, useState } from "react";


interface item {
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

export default function DisplayItem({params} : {params:{id:number}}) {
  const { id } = params
  const [item, setItem] = useState<item>({
    title: "",
    price: 0,
    description: "",
    rating: {
      rate: 0,
      count: 0,
    },
    image: ""
  })
  
  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setItem(res.data);
    };
    apiCall();
  }, []);

  

  return (
    <ItemDisplay 
      id = {id}
      title={item.title}
      price={item.price}
      des={item.description}
      rating={item.rating}
      img_src={item.image}
    />
  )
}
