import React, { useState, useRef, useEffect, useCallback } from "react";
// import heroImg from "/hero-img.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Hero({ apiData }) {
  const [displayData, setDisplayData] = useState([]);

  const organiseData = useCallback(() => {
    if (!apiData) return [];

    return [
      apiData.PopularMovies?.slice(0, 5),
      apiData.PopularTvSeries?.slice(5, 10),
    ];
  }, [apiData]);

  useEffect(() => {
    setDisplayData([...organiseData()[0], ...organiseData()[1]]);
  }, [organiseData]);

  return (
    <section className="w-full h-[30rem] lg:h-[50rem] relative 2xl:h-[100%] bg">
      <Slide
        infinite={true}
        autoplay={true}
        duration={5000}
        transitionDuration={100}
        className={"relative w-[20rem]  h-[40rem]"}
      >
        <div className="w-full z-20 h-full  bottom-0 gradient absolute"></div>
        {displayData.map((el, index) => {
          return (
            <div key={index}>
              <div
                className={`w-full h-[50rem]  relative bg-center  bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${el.primaryImage})` }}
              ></div>

              <div className="absolute z-30 top-[30%] lg:top-[20%] w-full flex justify-center items-start  flex-col px-5 ">
                <div className="lg:flex relative transform[translate(-50%, -50%)] left-0 right-0 justify-start items-center gap-x-5 hidden w-full my-4 max-w-[100rem]">
                  {" "}
                  <button className="w-[20%] cursor-pointer  bg-button-accent-color transition-colors duration-100 py-2 rounded-[1rem] flex justify-center items-center gap-x-2 hover:brightness-75">
                    Watch now
                    <i className="fa-solid fa-play"></i>
                  </button>{" "}
                  <button className="w-[20%] border-1  cursor-pointer border-button-accent-color glass hover:border-main-text-color transition-colors duration-100 py-2 rounded-[1rem] flex justify-center items-center gap-x-2">
                    Watch Later
                    <i className="fa-solid fa-clock"></i>
                  </button>
                </div>
                <h1 className="text-[clamp(1rem,100vw,3.5rem)]">
                  {el.originalTitle}
                </h1>

                <ul className="flex gap-x-3 lg:gap-x-[1rem] my-4 font-bold text-[.8rem]">
                  {el.genres.map((el, id) => {
                    return (
                      <li
                        className="bg-main-text-color text-main-bg-color px-2 py-1 rounded-[1rem] hover:transform-[translateY(-10px)] transition-transform duration-400 cursor-pointer"
                        key={id}
                      >
                        {el}
                      </li>
                    );
                  })}
                </ul>
                <ul className="flex gap-x-5">
                  <li>
                    {" "}
                    <i className="fa-solid fa-calendar-days mr-2"></i>
                    {el.startYear}
                  </li>
                  <li>
                    <i className="fa-solid fa-clock mr-2"></i>
                    {el?.runtimeMinutes
                      ? el.runtimeMinutes + " mins"
                      : "N/A"}{" "}
                  </li>
                  <li>
                    <i className="fa-solid fa-star mr-2"> </i>
                    {el.averageRating}
                  </li>
                </ul>

                <div className="flex justify-start items-center gap-x-5 lg:hidden w-full my-4 max-w-[30rem]">
                  {" "}
                  <button className="w-[70%] cursor-pointer bg-button-accent-color py-2 rounded-[1rem] flex justify-center items-center gap-x-2">
                    Watch now
                    <i className="fa-solid fa-play"></i>
                  </button>{" "}
                  <i className="fa-solid fa-bookmark cursor-pointer"></i>
                </div>

                <p className="hidden lg:block max-w-[35rem] my-5 text-[clamp(1rem,100vw,1.1rem)] line-clamp-1">
                  {el.description}
                </p>
              </div>
            </div>
          );
        })}
      </Slide>
    </section>
  );
}

export default Hero;
