import { Item } from "./Item";

export type LineItem = {
  id: number;
  quantity: number;
  description: string;
}

export type Cart = {
  lineItems: LineItem[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
}