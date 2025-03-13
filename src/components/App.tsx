"use client";

import { CartHeader, ItemList } from "@/components";
import { CartContextProvider } from "@/contexts";
import { Item } from "@/types";

export interface AppProps {
  items: Item[];
}

export function App(props: Readonly<AppProps>) {
  const { items } = props;

  return (
    <CartContextProvider items={items}>
      <div className={"flex flex-col w-full p-1"}>
        <div className={"flex-col w-full h-15 p-3"}>
          <CartHeader />
        </div>

        <ItemList />
      </div>
    </CartContextProvider>
  );
}
