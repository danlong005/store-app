"use client";

import { LineItem } from "@/types";
import React, { createContext, useContext, useState } from "react";

type CartContext = {
  lineItems: LineItem[];
  setLineItems: (cartLineItems: LineItem[]) => {};
};

const CartContext = createContext<any>(undefined);

export function CartContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartLineItems, setCartLineItems] = useState<LineItem[]>([]);

  return (
    <div>
      {JSON.stringify(cartLineItems)}
      <CartContext.Provider
        value={{
          cartLineItems,
          setCartLineItems,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export const useCartContext = () => useContext(CartContext);
