import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import PostCard from "../posts/PostCard/PostCard";
import Avatar from "../Avatar/Avatar";
import avatar from "../../assets/avatar.jpg";
import { IoSend } from "react-icons/io5";
import { PostData } from "../../types/PostData";
import ButtonLikePost from "../posts/ButtonLikePost/ButtonLikePost";
import ButtonSharePost from "../posts/ButtonSharePost/ButtonSharePost";

type Props = {
  post: PostData;
};

const CommentModal: React.FC<Props> = ({ post }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const textCommentRef = useRef<HTMLInputElement | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const handleFocusCommentInput = () => {
    textCommentRef.current?.focus();
  };
  return (
    <>
      <div
        className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg"
        onClick={handleOpenModal}
      >
        <FontAwesomeIcon icon={faCommentDots} />
        <p>Bình luận</p>
      </div>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box w-3/5 max-w-5xl overflow-y-auto scrollbar-none p-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="py-2 sticky top-0 bg-white z-10 border-b-[1.5px]">
              <button
                className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 z-20 focus-visible:outline-none"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h3 className="py-2 font-bold text-2xl text-center">
                Bài viết của Nguyễn Đình Vũ
              </h3>
            </div>
          </form>
          <div className="mt-2 border-b-[1.5px] px-4 py-2">
            <PostCard post={post} />
            <div className="flex justify-between mt-2">
              <ButtonLikePost post={post} />
              <div
                className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg"
                onClick={handleFocusCommentInput}
              >
                <FontAwesomeIcon icon={faCommentDots} />
                <p>Bình luận</p>
              </div>
              <ButtonSharePost />
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
                  sapiente atque est libero eum, incidunt obcaecati sint.
                  Ratione doloremque iure voluptas deleniti rerum obcaecati?
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
                  sapiente atque est libero eum, incidunt obcaecati sint.
                  Ratione doloremque iure voluptas deleniti rerum obcaecati?
                </p>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 flex items-center bg-white gap-4 p-4 border-t-[1.5px]">
            <div>
              <Avatar avatar={avatar} />
            </div>
            <input
              type="text"
              className="bg-gray-200 focus-visible:outline-none rounded-lg w-full py-2 px-6"
              placeholder="Nhập bình luận..."
              ref={textCommentRef}
            />
            <div className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-[500%]">
              <IoSend className="text-xl" />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CommentModal;
