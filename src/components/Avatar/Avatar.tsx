import React from "react";

type Props = {
  avatar: string | undefined;
};

const Avatar: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-12 h-12">
      <img src={props.avatar} alt="avatar" className="rounded-[50%]" />
    </div>
  );
};

export default Avatar;
