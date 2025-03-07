import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "@/contexts";

export function CartHeader() {
  const { cartLineItems } = useCartContext();

  const numberOfItemsInCart = (): number => {
    let sum: number = 0;

    if (cartLineItems.length === 0) return 0;

    for (const element of cartLineItems) {
      sum += element.quantity;
    }

    return sum;
  };

  return (
    <div className={"flex"}>
      <FontAwesomeIcon icon={faCartShopping} className={"h-10"} />
      <span
        className={
          "inline-block leading-10 bg-red-900 text-white w-[40px] rounded-4xl align-middle h-[40px] justify-evenly text-center font-bold text-2xl"
        }
      >
        {numberOfItemsInCart()}
      </span>
    </div>
  );
}
