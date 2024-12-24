import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PostData } from "../../../types/PostData";
import { useSocket } from "../../../context/SocketContext";

type Props = {
  post: PostData;
};

const ButtonLikePost: React.FC<Props> = ({ post }: Props) => {
  const socket = useSocket();
  const handleLikePost = async () => {
    socket.emit("like-post", { ...post });
  };
  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg"
      onClick={handleLikePost}
    >
      <FontAwesomeIcon icon={faThumbsUp} />
      <p>Thích</p>
    </div>
  );
};

export default ButtonLikePost;
