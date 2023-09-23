import React, { useState } from "react";

import { headerLogo } from "../assets/images/index";
import { hamburger, close } from "../assets/icons/index";

import { navLinks } from "../constants";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="padding-x w-full top-0 left-0 ">
      <nav className="md:px-10 py-4 px-7 md:flex justify-between items-center max-container ">
        {/* logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={90} height={20} />
        </a>

        {/* navlinks */}
        <ul
          className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-12" : " top-[-490px]"
          } max-md:bg-[#ff7676]  `}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="font-semibold my-7 md:my-0 md:ml-8">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red max-md:text-black
                max-md:hover:hover:bg-[#4b77c2]"
              >
                {item.label}
              </a>
            </li>
          ))}
          <button
            className="bg-[#a6c1ee] text-white
           px-4 py-2 md:ml-8 md:static rounded-full hover:bg-[#4b77c2]"
          >
            SignIn
          </button>
        </ul>

        {/* hamburger icon */}
        <div className="md:hidden absolute w-7 h-7 right-8 top-6 cursor-pointer  ">
          <img
            src={`${open ? `${close}` : `${hamburger}`}`}
            onClick={toggleNavbar}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
