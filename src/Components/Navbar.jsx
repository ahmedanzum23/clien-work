/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const navRef = useRef();
  const navlinkRef = useRef();
  const navbuttonRef = useRef();
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navRef.current.classList.add("bg-accentColor", "text-bgColor");
        navlinkRef.current.classList.add("text-bgColor");
        navbuttonRef.current.classList.add("bg-white", "text-black");
      } else {
        navRef.current.classList.remove("bg-accentColor", "text-bgColor");
        navlinkRef.current.classList.remove("text-bgColor");
        navbuttonRef.current.classList.remove("bg-white", "text-black");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div
      ref={navRef}
      className="fixed z-20 flex h-[4rem] w-screen flex-1 items-center justify-between px-10 transition-[all_0.5s_ease]"
    >
      <div className="flex  flex-[1_1_auto] items-center  justify-center ">
        <ul
          ref={navlinkRef}
          className=" ml-[4rem] flex cursor-pointer  items-center   gap-x-10 text-sm font-semibold text-accentColor transition-[all_0.5s_ease] "
        >
          <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
            <Link to="about" smooth duration={500}>
              Author Note
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
            <Link to="book" smooth duration={500}>
              Book Published
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
            <Link to="gallery" smooth duration={500}>
              Photo Gallery
            </Link>
          </li>
        </ul>
      </div>

      <button
        ref={navbuttonRef}
        type="button"
        className="mr-6 flex-[0_1_auto] rounded-full border bg-accentColor py-2 px-4 text-base font-bold text-bgColor transition-[all_0.5s_ease] hover:border-accentColor hover:bg-bgColor hover:text-accentColor"
      >
        <Link to="contact" smooth duration={500}>
          Contact Me
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
