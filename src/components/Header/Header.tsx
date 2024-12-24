import { NavLink } from "react-router";
import { FaHome, FaUsers } from "react-icons/fa";

import React, { memo } from "react";

import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderAction from "../HeaderAction/HeaderAction";

const Header: React.FC = memo(() => {
  return (
    <div className="flex justify-between items-center mx-auto max-w-screen-xl px-6 h-[60px]">
      <HeaderSearch />
      <div className="flex">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `px-12 py-2 text-gray-700 ${
              isActive ? "border-b-2 border-blue-500 !text-blue-600" : ""
            }`
          }
        >
          <FaHome className="text-4xl" />
        </NavLink>
        <NavLink
          to={"/b"}
          className={({ isActive }) =>
            `px-12 py-2 text-gray-700 ${
              isActive ? "border-b-2 border-blue-500 !text-blue-600" : ""
            }`
          }
        >
          <FaUsers className="text-4xl" />
        </NavLink>
        <NavLink
          to={"/c"}
          className={({ isActive }) =>
            `px-12 py-2 text-gray-700 ${
              isActive ? "border-b-2 border-blue-500 !text-blue-600" : ""
            }`
          }
        >
          <FaHome className="text-4xl" />
        </NavLink>
        <NavLink
          to={"/c"}
          className={({ isActive }) =>
            `px-12 py-2 text-gray-700 ${
              isActive ? "border-b-2 border-blue-500 !text-blue-600" : ""
            }`
          }
        >
          <FaHome className="text-4xl" />
        </NavLink>
      </div>
      <HeaderAction />
    </div>
  );
});

Header.displayName = "Header";

export default Header;
