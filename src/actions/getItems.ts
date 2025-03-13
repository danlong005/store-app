'use server';

import { Item } from "@/types";

export async function getItems(): Promise<Item[]> {
  return [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is the first item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'This is the second item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'This is the third item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'This is the fourth item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'This is the fifth item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 6,
      name: 'Item 6',
      description: 'This is the sixth item',
      price: 1.00,
      image: '',
      quantity: 5
    },
    {
      id: 7,
      name: 'Item 7',
      description: 'This is the seventh item',
      price: 1.00,
      image: '',
      quantity: 5
    }
  ];
}