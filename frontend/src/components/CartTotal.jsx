import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { getCartTotal, deliveryFee, currency } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTAL" />
      </div>
      <div className="mt-2 flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartTotal()}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {getCartTotal() === 0 ? 0 : getCartTotal() + deliveryFee}
            .00
          </b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
