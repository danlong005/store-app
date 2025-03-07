"use client";

import { CartHeader, ItemDisplay } from "@/components";
import { CartContextProvider } from "@/contexts";
import { Item } from "@/types";

export interface AppProps {
  items: Item[];
}

export function App(props: Readonly<AppProps>) {
  const { items } = props;

  return (
    <CartContextProvider>
      <div className={"flex flex-col w-full p-1"}>
        <div className={"flex-col w-full h-15 p-3"}>
          <CartHeader />
        </div>

        <div className={"w-full flex flex-wrap p-3"}>
          {items.map((item) => (
            <div
              className={
                "w-1/5 h-35 bg-orange-50 border border-1 rounded-2xl p-3 m-1 flex-row"
              }
              key={item.id}
            >
              <ItemDisplay item={item} />
            </div>
          ))}
        </div>
      </div>
    </CartContextProvider>
  );
}
