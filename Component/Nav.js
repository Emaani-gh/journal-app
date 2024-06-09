"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Nav() {
  const [openMenu, setOpenmenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setOpenmenu((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className=" flex justify-between items-center py-6  left-0 px-8 w-full z-50 md:bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* ---------LOGO----------------- */}
      <div className="logo">
        <h2 className=" font-prism font-bold text-2xl cursor-pointer">SEIDU</h2>
      </div>

      <div className="flex items-center gap-6 ">
        <BsFillMoonStarsFill
          className=" cursor-pointer text-lg"
          onClick={toggleDarkMode}
        />

        {/* ==================================MOBILE MENUS======================================= */}
        <div
          className={`${
            openMenu
              ? "bg-black opacity-90 fixed top-0 left-0 w-full h-screen md:hidden "
              : ""
          }`}
        >
          <ul
            className={`menus flex flex-col items-center w-full gap-6 absolute
                top-20 md:hidden  ${openMenu ? "openMobile" : ""}`}
          >
            <li className="hover:underline underline-offset-8">
              <a
                className="text-white md:textblack text-xl dark:text-white"
                href="#"
              >
                menu
              </a>
            </li>
            <li className="hover:underline underline-offset-8">
              <a
                className="text-white md:textblack text-xl dark:text-white"
                href="#"
              >
                menu
              </a>
            </li>

            <li className="hover:underline underline-offset-8">
              <a
                className="text-white md:textblack text-xl dark:text-white"
                href="#"
              >
                menu
              </a>
            </li>
            <li>
              <a
                className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
                href="#"
              >
                menu
              </a>
            </li>
          </ul>
        </div>
        {/* ==================================DESK MENUS======================================= */}
        <ul className={`hidden md:flex gap-4  ${openMenu ? "openMobile" : ""}`}>
          <li className=" hover:underline underline-offset-8">
            <a className="text-black text-xl dark:text-white" href="#">
              menu
            </a>
          </li>
          <li className=" hover:underline underline-offset-8">
            <a className="text-black text-xl dark:text-white" href="#">
              menu
            </a>
          </li>
          <li className=" hover:underline underline-offset-8">
            <a className="text-black text-xl dark:text-white" href="#">
              menu
            </a>
          </li>

          <li>
            <a
              className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
              href="#"
            >
              menu
            </a>
          </li>
        </ul>
        {/* ==================================HAMBURGER======================================= */}
        <div
          className={`hamburger w-8 md:hidden cursor-pointer ${
            openMenu ? "showMobile" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`${
              openMenu ? "bg-white" : "bg-black"
            } line-1 w-full h-[3px] dark:bg-white `}
          ></div>
          <div
            className={`${
              openMenu ? "bg-white" : "bg-black"
            } line-2 w-full h-[3px] dark:bg-white my-1`}
          ></div>
          <div
            className={`${
              openMenu ? "bg-white" : "bg-black"
            } line-3 w-full h-[3px] dark:bg-white `}
          ></div>
        </div>
      </div>
    </nav>
  );
}
