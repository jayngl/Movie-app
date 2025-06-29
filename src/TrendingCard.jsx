import React from "react";
import movieImg from "/movieImg.png";

function TrendingCard({ genres, title, img }) {
  return (
    <div className=" min-h-[20rem] relative px-4">
      <img src={img} alt="" className="w-full object-cover" loading="lazy" />
      <div className="flex justify-between items-center left-[50%] transform-[translate(-50%,-50%)] absolute top-0 w-full px-7 pt-8">
        <div>
          <i className="fa-solid fa-clock mr-2"></i>3:12:00
        </div>

        <div>
          <i className="fa-solid fa-star mr-2"></i>
          8.0
        </div>
      </div>
      <i className="fa-solid fa-circle-play absolute transform-[translate(-50%,-50%)] left-[50%] top-[50%] text-[3rem] hover:text-[3.5em] transition-all duration-150 cursor-pointer"></i>
      <div className="flex justify-between py-4">
        <h3 className="text-[1.1rem] font-bold">{title}</h3>
        <div className="flex  gap-x-2 pt-2 px-1 absolute top-0 left-0 ">
          {genres.map((el, id) => {
            return (
              <h1
                key={id}
                className="border rounded-[1rem] px-2 text-[.8rem] font-bold backdrop-blur-2xl   border-button-accent-color"
              >
                {el}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
