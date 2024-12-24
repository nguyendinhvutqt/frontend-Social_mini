import React, { useCallback, useEffect, useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import avatar from "../../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { IoSend } from "react-icons/io5";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router";
import axios from "../../utils/axios";
import { PostData } from "../../types/PostData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PostDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const i = searchParams.get("i");

  const initialIndex = i ? parseInt(i) : 0;

  const [post, setPost] = useState<PostData>();
  const [indexImage, setIndexImage] = useState<number>(initialIndex);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!id) return;

    const fetchPostData = async (id: string) => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/api/v1/posts/post?id=${id}`);
        if (res.status === 200) {
          setPost(res.data.data);
          console.log(res.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData(id);
  }, [id]);

  const handleDeceaseImage = useCallback(() => {
    if (indexImage <= 0) {
      return;
    }
    setIndexImage((prev) => prev - 1);
  }, [indexImage]);

  const handleInceaseImage = useCallback(() => {
    if (post?.images && indexImage >= post?.images.length) {
      return;
    }
    setIndexImage((prev) => prev + 1);
  }, [indexImage, post?.images]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-[calc(100vh-60px)]">
      <div className="relative flex items-center justify-center w-2/3 max-h-[calc(100vh-60px)] overflow-auto scrollbar-none">
        <img src={post?.images[indexImage]} alt="image" className="h-[90%]" />
        {indexImage > 0 && (
          <div
            className="absolute top-[50%] left-10 flex justify-center items-center w-10 h-10 rounded-[50%] bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
            onClick={handleDeceaseImage}
          >
            <FontAwesomeIcon icon={faCaretLeft} className="text-3xl" />
          </div>
        )}
        {post?.images && indexImage < post?.images.length - 1 && (
          <div
            className="absolute top-[50%] right-10 flex justify-center items-center w-10 h-10 rounded-[50%] bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
            onClick={handleInceaseImage}
          >
            <FontAwesomeIcon icon={faCaretRight} className="text-3xl" />
          </div>
        )}
      </div>

      <div className="w-1/3 max-h-[calc(100vh-60px)] overflow-auto scrollbar-none border-l-2">
        <div className="flex gap-3 items-center p-4">
          <Avatar avatar={post?.user.avatarUrl} />
          <p>{post?.user.displayName}</p>
        </div>
        <div className="px-2">
          <p>{post?.content}</p>
        </div>
        <div className="flex justify-between items-center px-2 py-1 mt-4 border-t-[1.5px] border-b-[1.5px]">
          <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faShareFromSquare} />
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-3 mb-2">
            <div>
              <Avatar avatar={avatar} />
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <p className="text-lg font-medium">Nguyễn Đình Vũ</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                vel eveniet officia numquam quisquam amet asperiores? Suscipit
                sapiente atque est libero eum, incidunt obcaecati sint. Ratione
                doloremque iure voluptas deleniti rerum obcaecati?
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-2">
            <div>
              <Avatar avatar={avatar} />
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <p className="text-lg font-medium">Nguyễn Đình Vũ</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                vel eveniet officia numquam quisquam amet asperiores? Suscipit
                sapiente atque est libero eum, incidunt obcaecati sint. Ratione
                doloremque iure voluptas deleniti rerum obcaecati?
              </p>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 flex items-center bg-white gap-4 p-4 border-t-[1.5px]">
          <div>
            <Avatar avatar={user.avatarUrl} />
          </div>
          <input
            type="text"
            className="bg-gray-200 focus-visible:outline-none rounded-lg w-full py-2 px-6"
            placeholder="Nhập bình luận..."
          />
          <div className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-[500%]">
            <IoSend className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
