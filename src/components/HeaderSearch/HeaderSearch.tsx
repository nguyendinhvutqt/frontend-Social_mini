import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

import Avatar from "../Avatar/Avatar";
import logo from "../../assets/Facebook-logo.png";
import axios from "../../utils/axios";
import useDebound from "../../hooks/useDebound";

interface UsersSearch {
  _id: string;
  displayName: string;
  avatarUrl: string;
}

const HeaderSearch: React.FC = memo(() => {
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<UsersSearch[]>([]);
  const deboundSearch = useDebound(search, 500);
  const navigate = useNavigate();

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  useEffect(() => {
    if (deboundSearch.length < 1) {
      setUsers([]);
      return;
    }
    const fetchApi = async (deboundSearch: string) => {
      try {
        const res = await axios.get(
          `/api/v1/users/search-name?name=${deboundSearch}`
        );
        if (res.status === 200) {
          setUsers(res.data.data);
        }
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error("Có lỗi xảy ra");
        } else {
          toast.error("Có lỗi xảy ra");
        }
      }
    };

    fetchApi(deboundSearch);
  }, [deboundSearch]);

  // Hàm tối ưu hóa khi người dùng click vào kết quả tìm kiếm
  const handleClickUser = useCallback(
    (userId: string) => {
      setSearch("");
      setUsers([]);
      navigate(`/profile?id=${userId}`);
    },
    [navigate]
  );

  const resultSearch = useMemo(() => {
    return users.length === 0 && deboundSearch.length > 0 ? (
      <div
        tabIndex={0}
        className="mt-3 dropdown-content bg-base-100 rounded-box z-[1] w-[250px] shadow max-h-[350px] overflow-y-auto scrollbar-none"
      >
        <div className="flex items-center gap-2 p-2 px-2">
          <p className="ml-2">Danh sách rỗng</p>
        </div>
      </div>
    ) : (
      <div
        tabIndex={0}
        className="mt-3 dropdown-content bg-base-100 rounded-box z-[1] w-[250px] shadow max-h-[350px] overflow-y-auto scrollbar-none"
      >
        {users?.map((user: UsersSearch) => {
          return (
            <div
              key={user._id}
              className="flex items-center gap-2 p-2 w-full hover:cursor-pointer hover:bg-gray-200 px-2"
              onClick={() => handleClickUser(user._id)}
            >
              <Avatar avatar={user.avatarUrl} />
              <p>{user.displayName}</p>
            </div>
          );
        })}
      </div>
    );
  }, [users, handleClickUser, deboundSearch]);

  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-14" />
      </Link>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearchChange}
          />
        </div>
        {resultSearch}
        {search && (
          <div
            tabIndex={0}
            className="mt-3 dropdown-content bg-base-100 rounded-box z-[1] w-[250px] shadow max-h-[350px] overflow-y-auto scrollbar-none"
          >
            {users && resultSearch}
          </div>
        )}
      </div>
    </div>
  );
});

HeaderSearch.displayName = "HeaderSearch";

export default HeaderSearch;
