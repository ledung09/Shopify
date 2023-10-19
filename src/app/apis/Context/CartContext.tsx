"use client"

import React, { createContext, useContext, useState } from "react";


interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContext {
  cart: boolean[];
  setCart: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({ children } : CartContextProviderProps) {
  const [cart, setCart] = useState<boolean[]>(new Array(20).fill(false))
  return (
    <CartContext.Provider
      value={{ cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("Put inside Context Provider!");
  return context;
}
