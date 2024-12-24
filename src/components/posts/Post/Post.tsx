import React from "react";

import CommentModal from "../../modals/CommentModal";
import { PostData } from "../../../types/PostData";
import PostCard from "../PostCard/PostCard";
import ButtonLikePost from "../ButtonLikePost/ButtonLikePost";
import ButtonSharePost from "../ButtonSharePost/ButtonSharePost";

type Props = {
  post: PostData;
};

const Post: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className="py-2 my-4 rounded-xl bg-white">
      <PostCard post={post} />

      <div className="flex justify-between items-center px-2 mt-2">
        <ButtonLikePost post={post} />
        <CommentModal post={post} />
        <ButtonSharePost />
      </div>
    </div>
  );
};

export default Post;
