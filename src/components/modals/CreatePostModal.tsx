import React, { useRef, useState } from "react";
import avatar from "../../assets/avatar.jpg";
import Avatar from "../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";

const CreatePostModal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <Link to={"/dfsdsdfsd"} className="w-7">
        <Avatar avatar={avatar} />
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
        <div className="modal-box">
          <h3
            id="modal-title"
            className="pb-2 font-bold text-center text-2xl border-b-[1.5px]"
          >
            Tạo bài viết
          </h3>
          <div className="flex items-center gap-3 mt-4">
            <Avatar avatar={avatar} />
            <p>Nguyễn Đình Vũ</p>
          </div>
          <div className="my-4">
            <textarea
              className="w-full resize-none focus-visible:outline-none"
              placeholder="Bạn đang nghĩ gì thế?"
              rows={4}
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
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Uploaded Preview ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 text-white bg-black bg-opacity-50 rounded-full p-1"
                >
                  <span className="text-lg">X</span>
                </button>
              </div>
            ))}
          </div>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
            <button className="px-4 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600">
              Đăng bài
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CreatePostModal;
