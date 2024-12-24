import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonSharePost: React.FC = () => {
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-2 rounded-lg">
      <FontAwesomeIcon icon={faShareFromSquare} />
      <p>Chia sẻ</p>
    </div>
  );
};

export default ButtonSharePost;
