import { getItems } from "@/actions";
import { App } from "@/components";
import { Item } from "@/types";

export default async function Store() {
  const items: Item[] = await getItems();

  return <App items={items} />;
}
