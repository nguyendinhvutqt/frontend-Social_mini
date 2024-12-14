import React from "react";
import avatar from "../../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaFacebookMessenger } from "react-icons/fa";
import Post from "../../components/Post/Post";

const ProfileUser: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[940px] h-[300px] bg-gray-100 relative">
        <div className="absolute top-[90%] left-0 flex justify-between items-center w-full px-10">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="avatar"
              className="w-[170px] h-[170px] rounded-[50%] hover:cursor-pointer"
            />
            <div className="hover:cursor-default">
              <p className="text-3xl my-2 font-medium">Nguyeenx DDinh vu</p>
              <p className="text-lg">1.6k bạn</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              <FontAwesomeIcon icon={faUserPlus} />
              <p className="font-medium">Thêm bạn bè</p>
            </div>
            <div className="flex items-center gap-3 text-sm bg-gray-300 px-4 py-2 rounded-lg hover:cursor-pointer">
              <FaFacebookMessenger />
              <p className="font-medium">Nhắn tin</p>
            </div>
            <div className="flex items-center gap-3 text-sm bg-gray-300 px-4 py-2 rounded-lg hover:cursor-pointer">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[180px] w-full bg-gray-200">
        <div className="flex gap-4 w-[940px] mt-6">
          <div className="flex flex-col gap-4 w-2/5">
            <div className="bg-white rounded-lg">Giới thiệu</div>
            <div className="bg-white rounded-lg">Ảnh</div>
            <div className="bg-white rounded-lg">Bạn bè</div>
          </div>
          <div className="flex flex-col w-3/5">
            <div className="bg-white rounded-lg">
              <p className="mx-4 my-2 text-2xl font-medium">Bài viết</p>
            </div>
            <div className="">
              <div className="bg-white rounded-lg">
                <Post />
              </div>
              <div className="bg-white rounded-lg">
                <Post />
              </div>
              <div className="bg-white rounded-lg">
                <Post />
              </div>
              <div className="mb-4">
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
