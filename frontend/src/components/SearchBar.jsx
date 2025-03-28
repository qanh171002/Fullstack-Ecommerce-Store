import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-200 bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-inherit text-sm outline-none"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="search" className="w-4" />
      </div>
      <img
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
        alt=""
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
