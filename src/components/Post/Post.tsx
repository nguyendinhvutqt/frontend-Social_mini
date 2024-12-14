import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import Avatar from "../Avatar/Avatar";
import avatar from "../../assets/avatar.jpg";
import test from "../../assets/ly-trong-vuon - Copy.jpg";
import test1 from "../../assets/cach-bo-hoa-cuoi-cam-tay-01-696x696.jpg";

const Post: React.FC = () => {
  const images = [avatar, test, test, test1];
  return (
    <div className="py-2 my-4 rounded-xl bg-white">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <Avatar avatar={avatar} />
          <div>
            <p>Nguyễn Đình Vũ</p>
            <label className="text-sm">3 ngày</label>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
      <div className="my-2 px-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
        tempore dolor eveniet, rem architecto nulla eum beatae, quo quidem in!
        Eligendi corporis eos expedita quisquam cupiditate aspernatur nemo quos,
        maxime totam.
      </div>
      <div
        className={`grid gap-2 items-center ${
          images.length > 1 ? `grid-cols-2` : `grid-cols-1`
        }`}
      >
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`relative ${
              index === 3 && images.length > 4 ? "overflow-hidden" : ""
            }`}
          >
            <img
              src={image}
              alt={`image-${index}`}
              className="w-full h-auto rounded-lg"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold">
                +{images.length - 4}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 border-b-[1.5px] p-2">
        <div className="flex items-center gap-2">
          <p>0</p>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className="flex items-center gap-2">
          <p>0</p>
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
      </div>
      <div className="flex justify-between items-center px-2 mt-2">
        <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>Thích</p>
        </div>
        <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
          <FontAwesomeIcon icon={faCommentDots} />
          <p>Bình luận</p>
        </div>
        <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
          <FontAwesomeIcon icon={faShareFromSquare} />
          <p>Chia sẻ</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
