import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function List({ token }) {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      if (res.data.success) setList(res.data.products);
      else toast.error(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
      } else toast.error(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List tabel title */}
        <div className="grid-cols hidden grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border border-gray-200 bg-gray-100 px-2 py-1 text-sm md:grid">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* Product List */}
        {list.map((item, i) => (
          <div
            className="grid=cols[1fr_3fr_1fr] grid items-center gap-2 border border-gray-200 px-2 py-1 text-sm md:grid-cols-[1fr_3fr_1fr_1fr_1fr]"
            key={i}
          >
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <button
              onClick={() => removeProduct(item._id)}
              className="font-base flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
