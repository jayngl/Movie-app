import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import DisplayShows from "./DisplayShows.jsx";
import NotFoundPage from "./NotFoundPage";
import Details from "./Details.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/popular",
    element: (
      <DisplayShows
        category={["PopularMovies", "PopularTvSeries"]}
        title={"Popular"}
      />
    ),
    errorElement: <NotFoundPage />,
  },

  {
    path: "/unreleased",
    element: (
      <DisplayShows
        category={["movies", "series"]}
        title={"Upcoming Releases"}
      />
    ),
    errorElement: <NotFoundPage />,
  },

  {
    path: "/top-rated",
    element: (
      <DisplayShows
        category={["topMovies", "topTvSeries"]}
        title={"Top-Rated"}
      />
    ),
    errorElement: <NotFoundPage />,
  },

  {
    path: "/Details",
    element: <Details />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
