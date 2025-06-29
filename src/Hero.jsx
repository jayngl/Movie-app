import React, { useState, useRef, useEffect, useCallback } from "react";
import heroImg from "/hero-img.png";

function Hero({ apiData }) {
  const [displayData, setDisplayData] = useState([]);
  const [count, setCount] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    let pausedTimeOut = null;
    let playTimeOut = null;

    const handleAnimation = () => {
      pausedTimeOut = setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.animationPlayState = "paused";
        }
      }, 1999);

      playTimeOut = setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.animationPlayState = "running";
        }
      }, 10000);
    };

    handleAnimation();

    return () => {
      clearTimeout(pausedTimeOut);
      clearTimeout(playTimeOut);
    };
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1); //
      if (imgRef.current) {
        imgRef.current.style.animation = "none";
        imgRef.current.offsetHeight;
        imgRef.current.style.animation =
          "sliderightToLeft 4s ease-in infinite forwards";
      }
    }, 12000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const organiseData = useCallback(() => {
    if (!apiData) return [];

    return [
      apiData.PopularMovies?.slice(5, 10),
      apiData.PopularTvSeries?.slice(5, 10),
    ];
  }, [apiData]);

  useEffect(() => {
    setDisplayData([...organiseData()[0], ...organiseData()[1]]);
  }, [count, organiseData]);

  useEffect(() => {
    setCount((prev) => (prev >= displayData.length - 1 ? 0 : prev));
  }, [displayData]);
  return (
    <section className="w-full h-[30rem] lg:h-[70rem] relative 2xl:h-[50rem]">
      <div className="w-full z-20 h-full  bottom-0 gradient absolute"></div>
      <img
        src={
          displayData[count]?.primaryImage && displayData[count].primaryImage
        }
        ref={imgRef}
        alt=""
        className="w-full h-full object-fit relative sliderightToLeftContainer -right-[100%]"
      />

      <div className="absolute z-30 top-[65%] lg:top-[15%] w-full flex justify-center items-start  flex-col px-5">
        <div className="lg:flex relative transform[translate(-50%, -50%)] left-0 right-0 justify-start items-center gap-x-5 hidden w-full my-4">
          {" "}
          <button
            className="w-[20%] cursor-pointer  bg-button-accent-color transition-colors duration-100 py-2 rounded-[1rem] flex justify-center items-center gap-x-2 hover:brightness-75"
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            Watch now
            <i className="fa-solid fa-play"></i>
          </button>{" "}
          <button className="w-[20%] border-1  cursor-pointer border-button-accent-color glass hover:border-main-text-color transition-colors duration-100 py-2 rounded-[1rem] flex justify-center items-center gap-x-2">
            Watch Later
            <i className="fa-solid fa-clock"></i>
          </button>
        </div>
        <h1 className="text-[1.6rem]">
          {displayData[count]?.originalTitle &&
            displayData[count].originalTitle}
        </h1>

        <ul className="flex gap-x-3 lg:gap-x-[1rem] my-4 font-bold text-[.8rem]">
          {displayData[count]?.genres &&
            displayData[count].genres.map((el, id) => {
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
            {displayData[count]?.startYear && displayData[count].startYear}
          </li>
          <li>
            <i className="fa-solid fa-clock mr-2"></i>
            {displayData[count]?.runtimeMinutes
              ? displayData[count].runtimeMinutes + " mins"
              : "N/A"}{" "}
          </li>
          <li>
            <i className="fa-solid fa-star mr-2"> </i>
            {displayData[count]?.averageRating &&
              displayData[count].averageRating}
          </li>
        </ul>

        <div className="flex justify-start items-center gap-x-5 lg:hidden w-full my-4">
          {" "}
          <button className="w-[70%] cursor-pointer bg-button-accent-color py-2 rounded-[1rem] flex justify-center items-center gap-x-2">
            Watch now
            <i className="fa-solid fa-play"></i>
          </button>{" "}
          <i className="fa-solid fa-bookmark cursor-pointer"></i>
        </div>

        <p className="hidden lg:block max-w-[35rem] my-5">
          {displayData[count]?.description && displayData[count].description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
