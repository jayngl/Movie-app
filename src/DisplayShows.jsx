import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import movieImg from "/movieImg.png";
import MovieCardSkeleton from "./MovieCardSkeleton";

function PopularShows({ category, title }) {
  const data = JSON.parse(localStorage.getItem("movieData") || []);
  const [changeType, setChangeType] = useState("movies");
  const [storeCategory, setCategory] = useState(category || []);
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
    <section className="relative">
      <div>
        <div className="flex justify-between items-center gap-x-3 text-white px-6 py-5">
          <h2 className="text-[1.5rem]" id="title">
            {title}
          </h2>{" "}
          <ul className="text-sub-text-color text-[.8rem] flex gap-x-4">
            <li
              className={`px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer ${
                changeType === "movies" ? "text-button-accent-color" : ""
              }`}
            >
              <a
                href="#Movies"
                onClick={() => {
                  setChangeType("movies");
                }}
              >
                Movies
              </a>
            </li>
            <li
              className={`px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer ${
                changeType === "Tv-Series" ? "text-button-accent-color" : ""
              }`}
            >
              <a
                href="#Tv-Series"
                onClick={() => {
                  setChangeType("Tv-Series");
                }}
              >
                Tv-Series
              </a>
            </li>
          </ul>
          <Link to={"/"}>
            <h2 className="text-sub-text-color hover:text-button-accent-color cursor-pointer">
              <i className="fa-solid fa-arrow-left mx-3"></i>back
            </h2>
          </Link>
        </div>
      </div>
      <div className=" w-full gridLayout h-full px-5">
        {changeType === "movies" ? (
          data?.[storeCategory[0]] ? (
            data[storeCategory[0]].slice(0, 20).map((el) => {
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
            })
          ) : (
            <div className="gridLayout w-full  ">
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
            </div>
          )
        ) : data?.[storeCategory[0]] ? (
          data[storeCategory[1]].slice(0, 20).map((el) => {
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
          })
        ) : (
          <div className="gridLayout w-full">
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </div>
        )}
      </div>
      <div
        className="w-[5rem] h-[2rem] bg-white rounded-[1rem] fixed z-40 top-5 right-[50%] left-[50%] hidden transform-[translate(-50%,-50%)] "
        ref={scrollBtnRef}
      >
        <a href="#title" className="text-[1.4rem] ">
          <i className="fa-solid fa-angle-up text-center w-full text-sub-text-color"></i>
        </a>
        //{" "}
      </div>
    </section>
  );
}

export default React.memo(PopularShows);
