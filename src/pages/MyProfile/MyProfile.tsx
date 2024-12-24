import React from "react";
import avatar from "../../assets/avatar.jpg";
import { FaChevronDown, FaPen, FaPlus } from "react-icons/fa";
import Post from "../../components/posts/Post/Post";
import CreatePostModal from "../../components/modals/CreatePostModal";

const MyProfile: React.FC = () => {
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
              <p className="text-3xl my-2 font-medium">Nguyễn Đình Vũ</p>
              <p className="text-lg">1.6k bạn</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex gap-3">
              <div className="flex items-center gap-3 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                <FaPlus />
                <p>Thêm vào tin</p>
              </div>
              <div className="flex items-center gap-3 text-sm bg-gray-300 px-4 py-2 rounded-lg hover:cursor-pointer">
                <FaPen />
                <p>Chỉnh sửa trang cá nhân</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-sm bg-gray-300 px-4 py-2 rounded-lg hover:cursor-pointer ml-auto">
                <FaChevronDown />
              </div>
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
            <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center gap-4 pb-2 border-b-[1.5px]">
              <CreatePostModal />
            </div>
            <div className="bg-white rounded-lg mt-3">
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

export default MyProfile;
