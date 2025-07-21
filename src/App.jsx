import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";

function App() {
  const [apiData, setApiData] = useState(() => {
    return JSON.parse(localStorage.getItem("movieData")) || {};
  });

  const APIKEY = "c3789b9a89mshdd13feb8cb32e0cp1bfb6cjsn11115e64c33c";

  const fetchMovieData = async () => {
    const headers = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
        "x-rapidapi-key": APIKEY,
      },
    };

    const [
      movieRes,
      seriesRes,
      topMovieRes,
      topTvData,
      popMovieDataRes,
      popTvResData,
    ] = await Promise.all([
      fetch(
        "https://imdb236.p.rapidapi.com/api/imdb/upcoming-releases?countryCode=US&type=MOVIE",
        headers
      ),
      fetch(
        "https://imdb236.p.rapidapi.com/api/imdb/upcoming-releases?countryCode=US&type=TV",
        headers
      ),
      fetch("https://imdb236.p.rapidapi.com/api/imdb/top250-movies", headers),
      fetch("https://imdb236.p.rapidapi.com/api/imdb/top250-tv", headers),
      fetch(
        "https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies",
        headers
      ),
      fetch("https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv", headers),
      // fetch(`https://imdb236.p.rapidapi.com/api/imdb/search?type=${movie}&genre=${Drama}&rows=25&sortOrder=ASC&sortField=id`)
    ]);

    const [movieData, seriesData, topMovies, topTv, popMovie, popTv] =
      await Promise.all([
        movieRes.json(),
        seriesRes.json(),
        topMovieRes.json(),
        topTvData.json(),
        popMovieDataRes.json(),
        popTvResData.json(),
      ]);

    const flatten = (data) => {
      const vals = Object.values(data);
      const secondNestedObjects = vals.map((obj) => Object.values(obj)[1]);
      const flatted = secondNestedObjects.flatMap((obj) => Object.values(obj));
      return flatted;
    };

    const freshData = {
      movies: flatten(movieData),
      series: flatten(seriesData),
      topMovies: topMovies,
      topTvSeries: topTv,
      PopularMovies: popMovie,
      PopularTvSeries: popTv,
      timeStamp: new Date().toISOString(),
    };

    setApiData(freshData);
    localStorage.setItem("movieData", JSON.stringify(freshData));
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("movieData"));

    if (localData && localData.timeStamp) {
      const differenceInTime = new Date() - new Date(localData.timeStamp);
      const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

      if (differenceInDays > 1) {
        fetchMovieData();
      } else {
        setApiData(localData);
      }
    } else {
      fetchMovieData();
    }
  }, []);

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
    <div className="bg-main-bg-color min-h-screen w-screen text-main-text-color  min-w-[20rem] 2xl:max-w-[75rem] 2xl:mx-auto ">
      <Header />
      <Hero apiData={apiData} />
      <MainSection apiData={apiData} />
      <div
        className="w-[5rem] h-[2rem] bg-white rounded-[1rem] fixed z-40 top-5 right-[50%] left-[50%] hidden transform-[translate(-50%,-50%)] "
        ref={scrollBtnRef}
      >
        <a href="#title" className="text-[1.4rem] ">
          <i className="fa-solid fa-angle-up text-center w-full text-sub-text-color"></i>
        </a>{" "}
      </div>
    </div>
  );
}

export default App;
