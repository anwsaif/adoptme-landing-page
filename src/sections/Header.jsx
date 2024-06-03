import React, { useEffect, useState } from "react";
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
        <nav className={"flex max-lg:flex-col  max-lg:fixed max-lg:w-screen max-lg:h-[100dvh] top-0 left-0 items-center max-lg:space-y-6 lg:space-x-40 justify-center lg:justify-between bg-white transition duration-500 ease-in-out lg:opacity-100 origin-bottom " + (isOpen ? " max-lg:opacity-100 max-lg:z-40 max-lg:translate-y-0" : "max-lg:opacity-0 max-lg:-z-50 max-lg:-translate-y-[100dvh]")}>
          <ul className="flex items-center justify-between max-lg:space-y-4 lg:space-x-12 max-md:flex-col ">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-x-2 relative group hover:cursor-pointer">
              Adoption
              <Icon icon="ep:arrow-down-bold" width={18} />
              <ul className=" absolute origin-top scale-y-0 group-hover:scale-y-100 transition duration-200 bg-white text-center top-8 min-w-10 shadow flex flex-col space-y-2 py-2 min-w-40">
                <li><a href="#">Dog</a></li>
                <li><a href="#">Cat</a></li>
                <li><a href="#">Komodo Dragon</a></li>
                <li><a href="#">Others</a></li>
              </ul>
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
          <div className="flex space-x-3 items-center lg:space-x-6">
            <a href="#" className="text-primary hover:text-secondary">Sign in</a>
            <a href="#" className="text-white bg-primary px-2 py-1 lg:px-6 lg:rounded-[3px] lg:py-3 rounded-sm hover:bg-white hover:text-primary hover:ring-primary hover:ring-1">Sign up</a>
          </div>
        </nav>
        <button type="button" className="lg:hidden text-primary">
          <Icon icon="cil:search" width={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
