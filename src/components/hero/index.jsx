import React from "react";
import { BsFillBalloonHeartFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className={"w-full h-[90vh] flex justify-center items-center px-4"}>
      <div
        className={
          "flex flex-row items-center justify-center py-8 px-4 bg-[#9883E5] rounded-2xl bg-opacity-20 shadow-2xl shadow-[#9883E5]"
        }
      >
        <BsFillBalloonHeartFill className="text-6xl text-[#72A1E5] px-1" />
        <span className={"text-center"}>
          Olá aniversariante, você está pronta para uma pequena aventura?
        </span>
        <BsFillBalloonHeartFill className="text-6xl text-[#72A1E5] px-1" />
      </div>
    </div>
  );
}
