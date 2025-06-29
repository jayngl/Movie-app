import React from "react";
import movieImg from "../public/defaultPoster.png";

function MovieCard({ genres, title, type, img, rating }) {
  const imageSrc = img?.url || img || movieImg;

  return (
    <div className="movieCardContainer w-[17rem]  min-h-[20rem]  relative hover:transform-[translateY(-8px)] transition-transform duration-400 flex justify-between items-center flex-col cursor-pointer">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover max-h-[20rem] h-full  relative top-0 w-full rounded-[.45rem]"
        // loading="lazy"
      />
      <div className="flex justify-between py-3 w-full ">
        <div className="detailsContainer opacity-0 absolute bottom-[1.5rem] hover:slideUpContainer w-full flex justify-between px-3">
          <div>
            <h1 className="font-bold text-[1.1rem]">{title}</h1>
            <h1>{type}</h1>
          </div>

          <h1 className="bg-button-accent-color flex justify-center items-center px-2 rounded-[1rem] w-[3.5rem] h-[2rem] ">
            {rating || "N.A"}/10
          </h1>
        </div>

        {/* <i className="fa-solid fa-circle-play absolute transform-[translate(-50%,-50%)] left-[50%] top-[50%] text-shadow-2xs text-shadow-button-accent-color text-[3rem] hover:text-[3.5em] transition-all duration-150 cursor-pointer"></i> */}
        <div className="flex  gap-x-2 pt-2 px-1 absolute top-0 left-0 ">
          {genres.map((el, id) => {
            return (
              <h1
                key={id}
                className="border rounded-[1rem] px-2 text-[.8rem] font-bold glass   border-button-accent-color"
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

export default React.memo(MovieCard);
