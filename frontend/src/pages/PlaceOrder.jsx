import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartTotal,
    deliveryFee,
    products,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartTotal() + deliveryFee,
      };
      switch (method) {
        case "cod": {
          const res = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } },
          );
          if (res.data.success) {
            setCartItems([]);
            navigate("/orders");
          } else {
            toast.error(res.data.message);
          }
          break;
        }

        case "stripe": {
          const res = await axios.post(
            backendUrl + "/api/order/place-stripe",
            orderData,
            { headers: { token } },
          );
          if (res.data.success) {
            const { session_url } = res.data;
            window.location.replace(session_url);
          } else {
            toast.error(res.data.message);
          }
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-h-[80vh] flex-col justify-between gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:pt-14"
    >
      {/* left */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1="DELIVERY" text2="DETAILS" />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={handleChange}
          name="street"
          value={formData.street}
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={handleChange}
            name="city"
            value={formData.city}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={handleChange}
            name="state"
            value={formData.state}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={handleChange}
            name="zipcode"
            value={formData.zipcode}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="number"
            placeholder="Zip code"
          />
          <input
            required
            onChange={handleChange}
            name="country"
            value={formData.country}
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={handleChange}
          name="phone"
          value={formData.phone}
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="number"
          placeholder="Phone number"
        />
      </div>
      {/* right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          {/* payment */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex cursor-pointer items-center gap-3 border border-gray-200 p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border border-gray-300 ${method === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img className="mx-4 h-5" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex cursor-pointer items-center gap-3 border border-gray-200 p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border border-gray-300 ${method === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="mt-8 w-full text-end">
            <button
              type="submit"
              className="bg-gray-900 px-16 py-3 text-sm text-gray-100 transition-colors duration-300 hover:opacity-90 active:bg-gray-700"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
