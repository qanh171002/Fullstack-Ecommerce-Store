import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    const bestSellerProducts = products.filter(
      (product) => product.bestseller === true,
    );
    setBestSellerProducts(bestSellerProducts.slice(0, 5));
  }, [products]);


  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSellerProducts.map((product, i) => (
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

export default BestSeller;
