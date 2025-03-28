import { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { toast } from "react-toastify";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    showSearch,
    setSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const logout = () => {
    navigate("/login");
    toast.success("Logged out successfully", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setToken("");
    setCartItems({});
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.adidas_logo} alt="logo" className="w-16" />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 uppercase"
          end
        >
          <p>Home</p>
          <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-700"></hr>
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 uppercase"
          end
        >
          <p>Collection</p>
          <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-700"></hr>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 uppercase"
          end
        >
          <p>About</p>
          <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-700"></hr>
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 uppercase"
          end
        >
          <p>Contact</p>
          <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-700"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(!showSearch);
            if (showSearch) setSearch("");
          }}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex cursor-pointer items-center gap-1"
          >
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt="user"
              className="w-5"
            />
          </div>

          {/* Dropdown Menu */}
          {token && (
            <div
              className={`absolute top-full right-0 z-50 mt-2 transition-all ${
                showDropdown ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="flex w-42 flex-col rounded bg-slate-50 py-2 shadow-lg">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowDropdown(false);
                  }}
                  className="px-5 py-2 text-left text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  My profile
                </button>
                <button
                  onClick={() => {
                    navigate("/orders");
                    setShowDropdown(false);
                  }}
                  className="px-5 py-2 text-left text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Orders
                </button>
                <button
                  onClick={logout}
                  className="px-5 py-2 text-left text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] aspect-square w-4 rounded-full bg-gray-900 text-center text-[8px] leading-4 text-gray-100">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-gray-400 py-3 pl-6 uppercase"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-gray-400 py-3 pl-6 uppercase"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-gray-400 py-3 pl-6 uppercase"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-gray-400 py-3 pl-6 uppercase"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
