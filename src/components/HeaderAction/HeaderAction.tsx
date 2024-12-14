import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../Avatar/Avatar";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearUser } from "../../redux/features/user/userSlice";
import { FaBell, FaFacebookMessenger, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const HeaderAction: React.FC = memo(() => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // Trạng thái của dropdown nào đang mở

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  // Tạo ref cho dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback((dropdownId: number) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  }, []);

  // Đóng dropdown nếu click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = useCallback(() => {
    dispatch(clearUser());
  }, [dispatch]);

  return (
    <div className="flex gap-x-2">
      {/* Messenger Dropdown */}
      <Link to={"/message"} className="">
        <div
          tabIndex={0}
          role="button"
          className="flex justify-center items-center h-12 w-12 rounded-[50%] bg-gray-200 hover:cursor-pointer"
        >
          <FaFacebookMessenger className={`text-2xl `} />
        </div>
      </Link>

      <div className="flex gap-x-2" ref={dropdownRef}>
        {/* Bell Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center items-center h-12 w-12 rounded-[50%] bg-gray-200 hover:cursor-pointer"
            onClick={() => toggleDropdown(1)} // Mở/đóng dropdown 2
          >
            <FaBell
              className={`text-2xl ${activeDropdown === 1 && "text-blue-600"}`}
            />
          </div>
          {activeDropdown === 1 && ( // Chỉ hiển thị dropdown 2 khi activeDropdown là 2
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
            onClick={() => toggleDropdown(2)} // Mở/đóng dropdown 2
          >
            <FaUser
              className={`text-2xl ${activeDropdown === 2 && "text-blue-600"}`}
            />
          </div>
          {activeDropdown === 2 && ( // Chỉ hiển thị dropdown 2 khi activeDropdown là 2
            <div
              tabIndex={0}
              className="mt-2 dropdown-content menu bg-base-100 rounded-box z-[1] shadow !p-0 w-[250px]"
            >
              <Link
                to={"/profile"}
                className="flex items-center gap-2 hover:bg-gray-200 py-2 px-4 border-b-[1.5px]"
              >
                <Avatar avatar={user?.avatarUrl} />
                <p className="text-lg font-normal">{user?.displayName}</p>
              </Link>
              <div className="hover:bg-gray-200 py-2 px-4 hover:cursor-pointer">
                <p className="text-lg">Cài đặt</p>
              </div>
              <div className="hover:bg-gray-200 py-2 px-4 hover:cursor-pointer">
                <p className="text-lg">Bạn bè</p>
              </div>
              <div
                className="hover:bg-gray-200 py-2 px-4 hover:cursor-pointer"
                onClick={handleSignOut}
              >
                <p className="text-lg">Đăng xuất</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

HeaderAction.displayName = "HeaderAction";

export default HeaderAction;
