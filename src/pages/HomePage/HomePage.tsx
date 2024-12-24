import React, { useEffect, useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { FaImages } from "react-icons/fa";
import Post from "../../components/posts/Post/Post";
import CreatePostModal from "../../components/modals/CreatePostModal";
import { Link } from "react-router";
import axios from "../../utils/axios";
import { PostData } from "../../types/PostData";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await axios.get("/api/v1/posts");
        if (res.status === 200) {
          setPosts(res.data.data);
        }
      } catch (error) {
        console.log(error);
        toast.error("Có lỗi xảy ra");
      }
    };

    fetchPostData();
  }, []);

  const handleCreatePost = async (createPostData: FormData) => {
    try {
      const res = await axios.post(`/api/v1/posts/create-post`, createPostData);
      if (res.status === 201) {
        console.log(res.data.data);
        setPosts((prev) => [res.data.data, ...prev]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPosts(posts);
  }, [posts]);
  return (
    <div className="flex gap-4 bg-gray-100 max-h-screen">
      <div className="w-1/4 p-6 bg-white my-4 rounded-lg">
        <Link to={`/${user.userId}`} className="flex gap-3 items-center">
          <Avatar avatar={user.avatarUrl} />
          <p>{user.displayName}</p>
        </Link>
      </div>
      <div className="w-1/2 overflow-y-scroll scrollbar-none">
        <div className="px-6 py-2 mt-4 rounded-xl bg-white">
          <div className="flex justify-center items-center gap-4 pb-2 border-b-[1.5px]">
            <CreatePostModal user={user} onCreatePost={handleCreatePost} />
          </div>
          <div className="flex items-center w-[100px] gap-3 mt-2 px-4 py-1 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FaImages className="text-green-500 text-3xl" />
            <p>Ảnh</p>
          </div>
        </div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <Post post={post} />
            </div>
          );
        })}
      </div>
      <div className="w-1/4 p-6 bg-white my-4 rounded-lg">right</div>
    </div>
  );
};

export default HomePage;
