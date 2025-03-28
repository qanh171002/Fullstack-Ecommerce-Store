import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subcategory }) {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (product) =>
          category === product.category && subcategory === product.subcategory,
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="py-2 text-center text-3xl">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProducts.map((product, i) => (
          <ProductItem
            key={i}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
