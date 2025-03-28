import { assets } from "../assets/assets";
function Navbar({ setToken }) {
  return (
    <div className="flex items-center justify-between px-[4%] py-2">
      <img className="w-20" src={assets.adidas_logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="rounded-full bg-gray-600 px-5 py-2 text-xs text-white sm:py-2 sm:text-sm"
      >
        Log out
      </button>
    </div>
  );
}

export default Navbar;
