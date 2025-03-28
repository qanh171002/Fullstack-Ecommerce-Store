import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-300 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      {/* data */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* image */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((item, i) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={i}
                alt=""
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="h-auto w-full" />
          </div>
        </div>
        {/* details */}

        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`border border-gray-200 bg-slate-50 px-4 py-2 ${item === size ? "border-gray-400" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={async () => {
              const success = await addToCart(productData._id, size);
              if (success)
                toast.success("Product added to cart", {
                  position: "top-left",
                  autoClose: 1000,
                  hideProgressBar: true,
                });
            }}
            className="bg-gray-900 px-8 py-3 text-sm text-gray-100 transition-colors duration-300 hover:opacity-90 active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 text-gray-300 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return within 7 days of delivery.</p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is a platform that allows businesses to sell
            products or services to customers over the internet.
          </p>
          <p>
            E-commerce websites are designed to provide a secure and
            user-friendly platform for online shopping, allowing customers to
            browse, select, and purchase products from anywhere in the world.
          </p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
