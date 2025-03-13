"use client";

import { Item, LineItem } from "@/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

type CartContext = {
  lineItems: LineItem[];
  setLineItems: (cartLineItems: LineItem[]) => {};
  items: Item[];
  setItems: (items: Item[]) => {};
};

const CartContext = createContext<any>(undefined);

interface CartContextProps {
  items: Item[];
  children: ReactNode;
}

export function CartContextProvider(props: Readonly<CartContextProps>) {
  const { items, children } = props;

  const [cartLineItems, setCartLineItems] = useState<LineItem[]>([]);
  const [storeItems, setStoreItems] = useState<Item[]>(items);

  return (
    <div>
      {JSON.stringify(cartLineItems)}
      <CartContext.Provider
        value={{
          cartLineItems,
          setCartLineItems,
          storeItems,
          setStoreItems,
        }}
      >
        {children}
      </CartContext.Provider>
      {JSON.stringify(storeItems)}
    </div>
  );
}

export const useCartContext = () => useContext(CartContext);
