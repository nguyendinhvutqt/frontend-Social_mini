import { Link, NavLink } from "react-router";
import {
  FaBell,
  FaFacebookMessenger,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";

import logo from "../../assets/Facebook-logo.png";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // Trạng thái của dropdown nào đang mở

  const toggleDropdown = (dropdownId: number) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null); // Nếu dropdown đang mở thì đóng nó
    } else {
      setActiveDropdown(dropdownId); // Mở dropdown mới và đóng các dropdown khác
    }
  };

  return (
    <div className="flex justify-between items-center px-6 h-[60px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-14" />
        </Link>
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
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
      <div className="flex gap-x-2">
        {/* Messenger Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center items-center h-12 w-12 rounded-[50%] bg-gray-200 hover:cursor-pointer"
            onClick={() => toggleDropdown(1)} // Mở/đóng dropdown 1
          >
            <FaFacebookMessenger
              className={`text-2xl ${activeDropdown === 1 && "text-blue-600"}`}
            />
          </div>
          {activeDropdown === 1 && ( // Chỉ hiển thị dropdown 1 khi activeDropdown là 1
            <ul
              tabIndex={0}
              className="mt-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          )}
        </div>

        {/* Bell Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center items-center h-12 w-12 rounded-[50%] bg-gray-200 hover:cursor-pointer"
            onClick={() => toggleDropdown(2)} // Mở/đóng dropdown 2
          >
            <FaBell
              className={`text-2xl ${activeDropdown === 2 && "text-blue-600"}`}
            />
          </div>
          {activeDropdown === 2 && ( // Chỉ hiển thị dropdown 2 khi activeDropdown là 2
            <ul
              tabIndex={0}
              className="mt-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          )}
        </div>

        {/* User Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center items-center h-12 w-12 rounded-[50%] bg-gray-200 hover:cursor-pointer"
            onClick={() => toggleDropdown(3)} // Mở/đóng dropdown 3
          >
            <FaUser
              className={`text-2xl ${activeDropdown === 3 && "text-blue-600"}`}
            />
          </div>
          {activeDropdown === 3 && ( // Chỉ hiển thị dropdown 3 khi activeDropdown là 3
            <ul
              tabIndex={0}
              className="mt-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
