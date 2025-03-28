import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);


  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="m-auto w-3/4 text-gray-600 sm:text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* Products */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((product, i) => (
          <ProductItem
            key={i}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
