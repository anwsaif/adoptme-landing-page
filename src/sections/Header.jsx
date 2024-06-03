import React, { useState } from "react";
import logo from "../assets/brand-logo.png";
import { Fade as Hamburger } from 'hamburger-react'
import { Icon } from '@iconify/react';

function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between lg:py-10 px-2">
        <span className="lg:hidden">
        <Hamburger  toggled={isOpen} toggle={setOpen} size={24} />
        </span>
        <a href="#">
          <img src={logo} alt="AdoptMe" />
        </a>
        <div className={"flex max-lg:flex-col  max-lg:fixed max-lg:w-screen max-lg:h-[100dvh] top-0 left-0 items-center max-lg:space-y-6 lg:space-x-40 justify-center lg:justify-between z-40 bg-white transition duration-400 ease-in-out lg:opacity-100 " + (isOpen ? " opacity-100 z-40" : "opacity-0 -z-50")}>

          <ul className="flex items-center justify-between max-lg:space-y-4 lg:space-x-12 max-md:flex-col ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#adoption">Adoption</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#stories">Stories with pet</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
          <div className="flex space-x-3">
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
        </div>
        <button type="button" className="lg:hidden">
          <Icon icon="cil:search" width={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
