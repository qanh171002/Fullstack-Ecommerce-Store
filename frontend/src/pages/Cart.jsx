import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t border-gray-200 pt-14">
      <div className="mb-3 text-2xl">
        <Title text1="YOUR" text2="CART" />
      </div>
      {cartData.length > 0 ? (
        <div>
          {cartData.map((item, i) => {
            const productData = products.find(
              (product) => product._id === item._id,
            );
            return (
              <div
                key={i}
                className="sm:grid-cols[4fr_2fr_0.5fr] grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-t border-b border-gray-200 py-4 text-gray-700"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-xs font-medium sm:text-lg">
                      {productData.name}
                    </p>
                    <div className="mt-2 flex items-center gap-5">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="border border-gray-200 bg-slate-50 px-2 sm:px-3 sm:py-1">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (newValue === "" || Number(newValue) <= 0) {
                      e.target.value = item.quantity;
                    } else {
                      updateQuantity(item._id, item.size, Number(newValue));
                    }
                  }}
                  className="max max-w-10 border border-gray-200 px-1 py-1 sm:max-w-20 sm:px-2"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => {
                    updateQuantity(item._id, item.size, 0);
                    toast.success("Product removed from cart", {
                      position: "top-left",
                      autoClose: 1000,
                      hideProgressBar: true,
                    });
                  }}
                  className="mr-4 w-4 cursor-pointer sm:w-5"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-10 text-center text-lg text-gray-500">
          No items in your cart.{" "}
          <Link
            to="/collection"
            className="inline-block text-gray-600 underline hover:text-gray-900"
          >
            Continue Shopping &rarr;
          </Link>
        </p>
      )}
      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            {cartData.length > 0 && (
              <button
                onClick={() => navigate("/place-order")}
                className="my-8 bg-gray-900 px-8 py-3 text-sm text-gray-100 transition-colors duration-300 hover:opacity-90 active:bg-gray-700"
              >
                PROCEED TO CHECKOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
