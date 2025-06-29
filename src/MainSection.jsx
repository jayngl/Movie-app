import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

function MainSection({ apiData }) {
  const [recType, setRecType] = useState("Movies");
  const [popularType, setpopularType] = useState("Movies");

  return (
    <main className="h-screen 2xl:h-[50rem] w-full relative z-30 ">
      <section>
        <div className="flex justify-start items-center px-4 py-4 relative z-30  gap-x-4 mt-[10rem] lg:-mt-70 lg:px-8 font-bold text-[1.1rem] ">
          <h2>Popular</h2>{" "}
          <ul className="text-sub-text-color text-[.8rem] flex gap-x-4">
            <li className="px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer">
              <a
                href="#Movies"
                onClick={() => {
                  setpopularType("Movies");
                }}
              >
                Movies
              </a>
            </li>
            <li className="px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer">
              <a
                href="#Tv-Series"
                onClick={() => {
                  setpopularType("Tv-Series");
                }}
              >
                Tv-Series
              </a>
            </li>
          </ul>
        </div>

        <div className="gridLayout w-full  ">
          {popularType === "Movies" ? (
            apiData?.PopularMovies ? (
              apiData.PopularMovies.slice(0, 4).map((el) => {
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
          ) : apiData?.PopularTvSeries ? (
            apiData.PopularTvSeries.slice(0, 4).map((el) => {
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
      </section>

      <section>
        <div className="flex justify-between items-center px-4 py-4 mt-[10rem] lg:mt-10 lg:px-8 font-bold text-[1.1rem] ">
          <h2>Upcoming Releases - Movies</h2>{" "}
          <h2 className="text-sub-text-color hover:text-button-accent-color cursor-pointer">
            View all<i className="fa-solid fa-arrow-right mx-3"></i>
          </h2>
        </div>

        <div className="gridLayout w-full  ">
          {apiData?.movies ? (
            Object.values(apiData.movies)
              .slice(0, 4)
              .map((el) => {
                const {
                  titles: [
                    {
                      id,
                      genres,
                      primaryTitle,
                      type,
                      primaryImage,
                      averageRating,
                    },
                  ],
                } = el;

                return (
                  <MovieCard
                    key={id}
                    genres={genres}
                    title={primaryTitle}
                    type={type}
                    img={primaryImage}
                    rating={averageRating}
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
          )}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center px-4 py-4 mt-[10rem] lg:mt-10 lg:px-8 font-bold text-[1.1rem] ">
          <h2>Upcoming Releases - Series</h2>{" "}
          <h2 className="text-sub-text-color hover:text-button-accent-color cursor-pointer">
            View all<i className="fa-solid fa-arrow-right mx-3"></i>
          </h2>
        </div>

        <div className="gridLayout w-full  ">
          {apiData?.series ? (
            Object.values(apiData.series)
              .slice(0, 4)
              .map((el) => {
                const {
                  titles: [
                    {
                      id,
                      genres,
                      primaryTitle,
                      type,
                      primaryImage,
                      averageRating,
                    },
                  ],
                } = el;

                return (
                  <MovieCard
                    key={id}
                    genres={genres}
                    title={primaryTitle}
                    type={type}
                    img={primaryImage}
                    rating={averageRating}
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
          )}
        </div>
      </section>

      {/* recommeded */}
      <section>
        <div className="flex justify-start items-center px-4 py-4  gap-x-4 mt-[10rem] lg:mt-10 lg:px-8 font-bold text-[1.1rem] ">
          <h2>Top-Rated</h2>{" "}
          <ul className="text-sub-text-color text-[.8rem] flex gap-x-4">
            <li className="px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer">
              <a
                href="#Movies"
                onClick={() => {
                  setRecType("Movies");
                }}
              >
                Movies
              </a>
            </li>
            <li className="px-2 py-1 border border-button-accent-color rounded-[1rem] hover:text-button-accent-color cursor-pointer">
              <a
                href="#Tv-Series"
                onClick={() => {
                  setRecType("Tv-Series");
                }}
              >
                Tv-Series
              </a>
            </li>
          </ul>
        </div>

        <div className="gridLayout w-full  ">
          {recType === "Movies" ? (
            apiData?.topMovies ? (
              apiData.topMovies.slice(0, 4).map((el) => {
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
          ) : apiData?.topTvSeries ? (
            apiData.topTvSeries.slice(0, 4).map((el) => {
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
      </section>
    </main>
  );
}

export default MainSection;
