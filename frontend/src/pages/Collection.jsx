import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";

function Collection() {
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentFilteredProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [categories, subCategories, search, sortType]);

  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) =>
        prev.filter((category) => category !== e.target.value),
      );
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) =>
        prev.filter((category) => category !== e.target.value),
      );
    } else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        categories.includes(product.category),
      );
    }
    setFilteredProducts(productsCopy);
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategories.includes(product.subCategory),
      );
    }
    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories, search, showSearch, products]);

  const sortProduct = () => {
    let filteredProductsCopy = filteredProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilteredProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price),
        );
        break;
      case "high-low":
        setFilteredProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price),
        );
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col gap-1 border-t border-gray-200 pt-10 sm:flex-row sm:gap-10">
      {/* filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 flex cursor-pointer items-center gap-2 text-xl"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleCategory}
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleCategory}
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleCategory}
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div
          className={`my-5 border border-gray-300 py-3 pl-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleSubCategory}
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleSubCategory}
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleSubCategory}
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Sort */}
          <select
            value={sortType}
            onChange={(e) => {
              setSortType(e.target.value);
            }}
            className="border-2 border-gray-300 px-2 text-sm"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* products */}
        <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          {currentFilteredProducts.map((product, i) => (
            <ProductItem
              key={i}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default Collection;
