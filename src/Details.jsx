import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function Details() {
  const [id, setId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const getId = params.get("id");
    setId(getId);
  }, [location.search]);

  const data = JSON.parse(localStorage.getItem("movieData")) || {};
  const getData = [
    ...data.PopularMovies,
    ...data.PopularTvSeries,
    ...data.movies,
    ...data.series,
    ...data.topMovies,
    ...data.topTvSeries,
  ];

  const filterData = getData.filter((el) => {
    return el.id === id;
  });

  const {
    genres,
    primaryTitle,
    primaryImage,
    description,
    startYear,
    runtimeMinutes,
    averageRating,
    trailer,
  } = filterData[0] || [];

  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const scrollTopbtn = () => {
      const verticalScroll = window.pageYOffset;
      const halfViewport = window.innerHeight / 2;

      if (verticalScroll >= halfViewport) {
        scrollBtnRef.current?.classList.remove("hidden");
      } else {
        scrollBtnRef.current?.classList.add("hidden");
      }
    };
    window.addEventListener("scroll", scrollTopbtn);

    scrollTopbtn();

    return () => {
      window.removeEventListener("scroll", scrollTopbtn);
    };
  }, []);

  return (
    <section className="text-white w-screen  relative  h-screen">
      <div className=" absolute top-5 z-40  right-10">
        <Link to={"/"}>
          <h2 className="text-sub-text-color hover:text-button-accent-color cursor-pointer text-[1.1rem]">
            <i className="fa-solid fa-arrow-left mx-3 "></i>back
          </h2>
        </Link>
      </div>
      <div className="glass w-full h-full absolute z-10"></div>
      <div
        className={`w-full h-full  bg-cover bg-no-repeat `}
        style={{ backgroundImage: `url(${primaryImage})` }}
      ></div>
      <div className="absolute top-0 z-20 flex flex-col-reverse lg:flex-row  justify-center items-center mx-auto w-full h-full gap-x-[3rem] ">
        <div
          className="w-[20rem] rounded-[1rem] shadow-2xl h-[30rem]  bg-cover bg-no-repeat hidden lg:block"
          style={{ backgroundImage: `url(${primaryImage})` }}
        ></div>
        <div className=" max-w-[30rem] flex justify-center items-start gap-y-[2rem] flex-col px-5 w-full h-screen">
          <h1 className="text-[clamp(3rem,10vw,4.3rem)]" id="title">
            {primaryTitle}
          </h1>
          <div className="flex">
            <ul className="flex gap-x-5">
              <li>
                {" "}
                <i className="fa-solid fa-calendar-days mr-2"></i>
                {startYear}
              </li>
              <li>
                <i className="fa-solid fa-clock mr-2"></i>
                {runtimeMinutes ? runtimeMinutes + " mins" : "N/A"}{" "}
              </li>
              <li>
                <i className="fa-solid fa-star mr-2"> </i>
                {averageRating}
              </li>
            </ul>
          </div>

          <ul className="flex w-full gap-x-5">
            {(genres || []).map((el, index) => {
              return (
                <li
                  className="bg-main-text-color text-main-bg-color px-2 py-1 rounded-[1rem] hover:transform-[translateY(-10px)] transition-all hover:bg-button-accent-color hover:text-white  duration-400 cursor-pointer"
                  key={index}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full  flex-col  h-screen px-5">
        <h1 className="text-[2rem] "> Trailer</h1>
        <div
          className="w-[clamp(1rem,90vw,70rem)] relative h-[clamp(5rem,70vh,25rem)] bg-cover bg-no-repeat flex justify-center items-center rounded-[1rem] "
          style={{ backgroundImage: `url(${primaryImage})` }}
        >
          <div className=" w-full h-full absolute z-10"></div>

          <a
            href={trailer}
            target="_blank"
            className="cursor-pointer  bg-black hover:bg-button-accent-color transition-colors duration-300 rounded-[.45rem] px-5 py-2 outline-2 hover:outline-0  relative z-30"
            tabIndex={0}
            role="button"
          >
            {" "}
            {trailer ? (
              <i className="fa-solid fa-circle-play text-[clamp(2rem,100vw,3rem)]">
                {" "}
              </i>
            ) : (
              <i className="fa-solid fa-video-slash text-[clamp(2rem,100vw,3rem)]"></i>
            )}
          </a>
        </div>
      </div>

      <div>
        <h1 className="ml-4 mb-4 text-[clamp(1.1rem,100vw,1.5rem)]">
          You may like
        </h1>
        <div className="gridLayout w-full">
          {getData
            .filter((el) => el.genres.some((genre) => genres?.includes(genre)))
            .slice(0, 20)
            .map((el) => {
              const {
                id,
                genres,
                primaryTitle,
                type,
                primaryImage,
                averageRating,
              } = el;

              return (
                <MovieCard
                  key={id}
                  genres={genres}
                  title={primaryTitle}
                  type={type}
                  img={primaryImage}
                  rating={averageRating}
                  id={id}
                />
              );
            })}
        </div>
      </div>
      <div
        className="w-[5rem] h-[2rem] bg-white rounded-[1rem] fixed z-40 top-5 right-[50%] left-[50%] hidden transform-[translate(-50%,-50%)] "
        ref={scrollBtnRef}
      >
        <a href="#title" className="text-[1.4rem] ">
          <i className="fa-solid fa-angle-up text-center w-full text-sub-text-color"></i>
        </a>{" "}
      </div>
    </section>
  );
}

export default Details;
