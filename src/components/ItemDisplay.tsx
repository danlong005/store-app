import { ItemControls } from "@/components";
import { Item } from "@/types";

export interface ItemDisplayProps {
  item: Item;
}

export function ItemDisplay(props: Readonly<ItemDisplayProps>) {
  const { item } = props;

  return (
    <div>
      <div>Item Description</div>
      <div>{item.description}</div>
      <div>${item.price}</div>
      <div>{item.quantity}</div>
      <div>
        <ItemControls item={item} />
      </div>
    </div>
  );
}
