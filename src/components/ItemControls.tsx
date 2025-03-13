"use client";

import { useCartContext } from "@/contexts";
import { Item, LineItem } from "@/types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ItemControlsProps {
  item: Item;
}

export function ItemControls(props: Readonly<ItemControlsProps>) {
  const { cartLineItems, setCartLineItems, storeItems, setStoreItems } =
    useCartContext();
  const { item } = props;

  const handleAddToCart = () => {
    let lineItems = cartLineItems;
    let onlineStoreItems = storeItems;

    let lineItem = lineItems.find(({ id }: LineItem) => id === item.id);
    if (lineItem !== undefined && lineItem !== null) {
      lineItem.quantity += 1;
      lineItems = lineItems.filter((cli: LineItem) => cli.id !== item.id);
    } else {
      lineItem = { ...item, quantity: 1 };
    }

    lineItems.push({ ...lineItem });
    setCartLineItems([...lineItems]);

    let storeItem = onlineStoreItems.find(({ id }: Item) => id === item.id);
    if (storeItem !== undefined && storeItem !== null) {
      storeItem.quantity -= 1;
      onlineStoreItems = onlineStoreItems.filter(
        (si: Item) => si.id !== item.id
      );
    }
    onlineStoreItems.push({ ...storeItem });
    setStoreItems([...onlineStoreItems]);
  };

  const handleRemoveFromCart = () => {
    let lineItems = cartLineItems;
    let onlineStoreItems = storeItems;

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

    let storeItem = onlineStoreItems.find(({ id }: Item) => id === item.id);
    if (
      storeItem !== undefined &&
      storeItem !== null &&
      storeItem.quantity >= 0
    ) {
      storeItem.quantity += 1;
      onlineStoreItems = onlineStoreItems.filter(
        ({ id }: Item) => id !== item.id
      );
      onlineStoreItems.push(storeItem);
    }

    setStoreItems(onlineStoreItems);
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
