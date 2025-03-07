"use client";

import { useCartContext } from "@/contexts";
import { Item, LineItem } from "@/types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ItemControlsProps {
  item: Item;
}

export function ItemControls(props: Readonly<ItemControlsProps>) {
  const { cartLineItems, setCartLineItems } = useCartContext();
  const { item } = props;

  const handleAddToCart = () => {
    let lineItems = cartLineItems;

    let lineItem = lineItems.find(({ id }: LineItem) => id === item.id);
    if (lineItem !== undefined && lineItem !== null) {
      lineItem.quantity += 1;
      lineItems = cartLineItems.filter((cli: LineItem) => cli.id !== item.id);
    } else {
      lineItem = { ...item, quantity: 1 };
    }

    lineItems.push({ ...lineItem });
    setCartLineItems([...lineItems]);
  };

  const handleRemoveFromCart = () => {
    let lineItems = cartLineItems;
    let lineItem = lineItems.find(({ id }: LineItem) => id === item.id);

    if (lineItem !== undefined && lineItem !== null && lineItem.quantity > 1) {
      lineItem.quantity -= 1;
      lineItems = lineItems.filter(({ id }: LineItem) => id !== item.id);
      lineItems.push(lineItem);
    } else if (
      lineItem !== undefined &&
      lineItem !== null &&
      lineItem.quantity == 1
    ) {
      lineItems = lineItems.filter(({ id }: LineItem) => id !== item.id);
    }

    setCartLineItems(lineItems);
  };

  return (
    <div>
      <button onClick={handleAddToCart}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button onClick={handleRemoveFromCart}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}
