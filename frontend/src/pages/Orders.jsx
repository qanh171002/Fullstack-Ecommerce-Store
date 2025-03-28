import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } },
      );
      if (res.data.success) {
        let allOrdersItems = [];
        res.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItems.push(item);
          });
        });
        setOrders(allOrdersItems.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {orders.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 border-t border-b border-gray-200 py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="mt-1 flex items-center gap-3 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1">
                  Payment:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 min-w-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="rounded-sm border border-gray-200 px-4 py-2 text-sm font-medium"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
