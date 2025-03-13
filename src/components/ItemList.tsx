import { useCartContext } from "@/contexts";
import { ItemDisplay } from "./ItemDisplay";
import { Item } from "@/types";

export function ItemList() {
  const { storeItems } = useCartContext();

  let sortedItems = storeItems.sort((a: Item, b: Item) => a.id - b.id);

  return (
    <div className={"w-full flex flex-wrap p-3"}>
      {sortedItems.map((item: Item) => (
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
  );
}
