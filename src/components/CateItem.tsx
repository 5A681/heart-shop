import React from "react";

type Props = {
  name: string;
  src: string;
};

export default function CateItem({ name, src }: Props) {
  return (
    <div className="flex items-center justify-center w-[100%]">
      <div className="">
        <div className="flex justify-center">
          <div className="w-14 h-14">
            <img src={src} alt="care" />
          </div>
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
}
