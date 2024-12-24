import React, { useRef, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { UserState } from "../../redux/features/user/userSlice";

type Props = {
  user: UserState;
  onCreatePost: (createPostData: FormData) => void;
};

const CreatePostModal: React.FC<Props> = ({ user, onCreatePost }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [imagesDisplay, setImagesDisPlay] = useState<string[]>([]);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoading) {
      return;
    }
    if (content.length <= 0) {
      toast.warning("Vui lòng nhập nội dung bài viết");
      return;
    }

    const formData = new FormData();
    formData.append("content", content.trim());

    images.forEach((image) => {
      formData.append("images", image);
    });

    setImages([]);
    setContent("");
    setImagesDisPlay([]);

    onCreatePost(formData);
    modalRef.current?.close();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files); // Convert FileList to Array
      setImages((prevImages) => [...prevImages, ...newFiles]);

      const newImagesDisplay: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImagesDisplay.push(reader.result as string);
          if (newImagesDisplay.length === files.length) {
            setImagesDisPlay((prevImagesDisplay) => [
              ...prevImagesDisplay,
              ...newImagesDisplay,
            ]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImagesDisPlay(imagesDisplay.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    setImages([]);
    setContent("");
    setImagesDisPlay([]);
    modalRef.current?.close();
  };

  return (
    <>
      <Link to={`/${user?.userId}`} className="w-7">
        <Avatar avatar={user?.avatarUrl} />
      </Link>
      <button
        className="flex-1 ml-4 py-2 px-4 rounded-2xl focus:outline-none text-left bg-gray-200 text-gray-500"
        onClick={handleOpenModal}
      >
        Bạn đang nghĩ gì thế?
      </button>
      <dialog
        ref={modalRef}
        className="modal"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <form onSubmit={handleSubmitForm} className="modal-box">
          <h3
            id="modal-title"
            className="pb-2 font-bold text-center text-2xl border-b-[1.5px]"
          >
            Tạo bài viết
          </h3>
          <div className="flex items-center gap-3 mt-4">
            <Avatar avatar={user?.avatarUrl} />
            <p>{user?.displayName}</p>
          </div>
          <div className="my-4">
            <textarea
              className="w-full resize-none focus-visible:outline-none"
              placeholder="Bạn đang nghĩ gì thế?"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center space-x-4 border-[1.5px] rounded-lg p-2">
            <input
              type="file"
              id="file-upload"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="file-upload"
              className="w-12 h-12 bg-gray-200 rounded-full cursor-pointer flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faImage}
                className="text-xl text-green-500"
              />
            </label>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {imagesDisplay.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Uploaded Preview ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 text-white bg-black bg-opacity-50 rounded-full p-1"
                >
                  <span className="text-lg">X</span>
                </button>
              </div>
            ))}
          </div>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleCloseModal}>
              Close
            </button>
            <button
              disabled={isLoading}
              type={isLoading ? "button" : "submit"}
              className="px-4 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600"
            >
              {isLoading ? "Đang đăng bài..." : "Đăng bài"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default CreatePostModal;
