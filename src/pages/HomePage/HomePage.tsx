import React from "react";
import avatar from "../../assets/avatar.jpg";
import Avatar from "../../components/Avatar/Avatar";
import { FaImages } from "react-icons/fa";
import Post from "../../components/Post/Post";
import CreatePostModal from "../../components/modals/CreatePostModal";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="w-1/4 p-6">
        <Link to={"/dấdasdas"} className="flex gap-3 items-center">
          <Avatar avatar={avatar} />
          <p>Nguyễn Đình Vũ</p>
        </Link>
      </div>
      <div className="w-1/2">
        <div className="px-6 py-2 my-4 rounded-xl bg-white">
          <div className="flex justify-center items-center gap-4 pb-2 border-b-[1.5px]">
            <CreatePostModal />
          </div>
          <div className="flex items-center w-[100px] gap-3 mt-2 px-4 py-1 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FaImages className="text-green-500 text-3xl" />
            <p>Ảnh</p>
          </div>
        </div>

        <Post />
        <Post />
        <Post />
      </div>
      <div className="w-1/4">right</div>
    </div>
  );
};

export default HomePage;
