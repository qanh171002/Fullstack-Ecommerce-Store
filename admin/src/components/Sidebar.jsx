import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
function Sidebar() {
  return (
    <div className="min-h-screen w-[18%] border-r-2 border-gray-200">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2"
          to="/add"
        >
          <img className="h-5 w-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2"
          to="/list"
        >
          <img className="h-5 w-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2"
          to="/orders"
        >
          <img className="h-5 w-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
