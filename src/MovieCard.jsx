import React, { useEffect, useState } from "react";
import movieImg from "../public/defaultPoster.png";
import { Link } from "react-router-dom";

function MovieCard({ genres, title, type, img, rating, id }) {
  const imageSrc = img?.url || img || movieImg;

  return (
    <Link to={`/Details?id=${id}`}>
      <div className="movieCardContainer text-white w-[14rem] overflow-hidden   min-h-[20rem]  relative  flex justify-between items-center flex-col cursor-pointer">
        <div className="gradientContainer transition-all duration-200 absolute z-20 w-full h-full"></div>
        <img
          src={imageSrc}
          alt={title}
          className="object-cover max-h-[20rem] h-full  relative top-0 w-full rounded-[.45rem] transition-transform duration-200 ease-in "
          loading="lazy"
        />
        <div className="flex justify-between py-3 w-full ">
          <div className="detailsContainer z-30 opacity-0 absolute bottom-[1.5rem] hover:slideUpContainer w-full flex justify-between px-3">
            <div>
              <h1 className="font-bold text-[1.1rem]">{title}</h1>
              <h1>{type}</h1>
            </div>

            <h1 className="bg-button-accent-color flex justify-center items-center px-2 rounded-[1rem] w-[3.5rem] h-[2rem] ">
              {rating || "N.A"}/10
            </h1>
          </div>

          <div className="flex  gap-x-2 pt-2 px-1 absolute top-0 left-0 ">
            {genres.map((el, id) => {
              return (
                <h1
                  key={id}
                  className="border rounded-[1rem] px-2 text-[.65rem] font-bold glass   border-button-accent-color"
                >
                  {el}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(MovieCard);
