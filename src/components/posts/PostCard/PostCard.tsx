import React from "react";
// import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";
import { PostData } from "../../../types/PostData";
import timeAgo from "../../../utils/timeAgo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  post: PostData;
};

const PostCard: React.FC<Props> = ({ post }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <Avatar avatar={post?.user.avatarUrl} />
          <div>
            <p>{post?.user.displayName}</p>
            <label className="text-sm">{timeAgo(post?.createdAt)}</label>
          </div>
        </div>
        {/* <div className="flex items-center gap-4">
          <div className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div> */}
      </div>
      <div className="my-2 px-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
        tempore dolor eveniet, rem architecto nulla eum beatae, quo quidem in!
        Eligendi corporis eos expedita quisquam cupiditate aspernatur nemo quos,
        maxime totam.
      </div>
      <div
        className={`grid gap-2 items-center ${
          post?.images.length > 1 ? `grid-cols-2` : `grid-cols-1`
        }`}
      >
        {post?.images.slice(0, 4).map((image, index) => (
          <Link
            to={`/post?id=${post?._id}&i=${index}`}
            key={index}
            className={`relative ${
              index === 3 && post.images.length > 4 ? "overflow-hidden" : ""
            }`}
          >
            <img
              src={image}
              alt={`image-${index}`}
              className="w-full h-auto rounded-lg"
            />
            {index === 3 && post.images.length > 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold">
                +{post.images.length - 4}
              </div>
            )}
          </Link>
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
    </div>
  );
};

export default PostCard;
