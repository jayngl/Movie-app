import React, { useState, useRef } from "react";

function Header() {
  const navModalRef = useRef(null);
  const searchRef = useRef(null);
  return (
    <>
      <header className="relative z-10">
        <nav className="w-full h-[3.5rem] bg-transparent flex justify-center items-center ">
          {/* Mobile */}
          <div className="flex w-full justify-between mx-10 relative lg:hidden">
            <i
              className="fa-solid fa-magnifying-glass fa-lg"
              onClick={() => {
                searchRef.current.classList.contains("hidden")
                  ? searchRef.current.classList.remove("hidden")
                  : searchRef.current.classList.add("hidden");
              }}
            ></i>

            <div
              className="w-[15rem] h-[2rem] rounded-[1rem] bg-main-text-color text-main-bg-color px-3 hidden  mx-10 lg:flex justify-center items-center overflow-hidden absolute  transform-[translate(-50%, -50%)] -left-8 right-0 top-5"
              ref={searchRef}
            >
              <input
                type="text"
                className=" w-full h-full px-3 outline-0 "
                placeholder="search movie..."
              />
              <i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer"></i>
            </div>
            <i
              className="fa-solid fa-bars fa-lg"
              onClick={() => {
                navModalRef.current.classList.contains("hidden")
                  ? navModalRef.current.classList.remove("hidden")
                  : navModalRef.current.classList.add("hidden");
              }}
            ></i>

            <div
              className="absolute bg-main-text-color text-main-bg-color  transform-[translate(-50%, -50%)] -left-8 right-0 top-5 h-[15rem] min-w-[19rem] hidden  "
              ref={navModalRef}
            >
              <ul className="w-full h-full  flex justify-center items-center flex-col">
                <li className="w-full bg-button-accent-color ">
                  <a
                    href="#Sign-up/in"
                    className="block w-full text-center py-5 border-b-1 "
                  >
                    Sign-up/in
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#Home"
                    className="block w-full text-center py-5 border-b-1 "
                  >
                    Home
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#Genre"
                    className="block w-full  text-center py-5 border-b-1"
                  >
                    Genre
                  </a>
                </li>
                <li className="w-full">
                  <a href="#Country" className="block w-full  text-center py-5">
                    Country
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop */}
          <ul className="hidden gap-x-5 lg:flex">
            <li className="inline-block relative">
              <a
                href="#Home"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Home
              </a>
            </li>
            <li className="inline-block relative">
              <a
                href="#Genre"
                className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Genre
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#Country"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Country
              </a>
            </li>
          </ul>

          <div className="w-[25rem] h-[2rem] rounded-[1rem] bg-main-text-color text-main-bg-color px-3 hidden  mx-10 lg:flex justify-center items-center overflow-hidden">
            <input
              type="text"
              className=" w-full h-full px-3 outline-0 "
              placeholder="search movies..."
            />
            <i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer"></i>
          </div>

          <ul className=" gap-x-5 hidden lg:flex">
            <li className="inline-block">
              <a
                href="#Movies"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Movies
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#Series"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Series
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#Country"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Animation
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#Login/Signup"
                className="relative after:content-[''] after:absolute after:-bottom-3 after:left-[50%] after:right-[50%] after:transform[translate(-50%,-50%)] after:h-[.4rem] after:w-2 after:bg-button-accent-color after:rounded-full after:opacity-0 hover:after:opacity-[1] after:transition-all after:duration-500"
              >
                Login/Signup
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
