import React, { useEffect, useState } from "react";
import logo from "../assets/brand-logo.svg";
import { Fade as Hamburger } from 'hamburger-react'
import { Icon } from '@iconify/react';
import SearchButton from "../ui/SearchButton";

function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-40">
      <div className="container mx-auto flex items-center justify-between lg:py-10 px-2 lg:px-8 xl:px-0">
        <span className="lg:hidden">
        <Hamburger  toggled={isOpen} toggle={setOpen} size={24} />
        </span>
        <a href="#">
          <img src={logo} alt="AdoptMe" />
        </a>
        <nav className={"flex max-lg:flex-col  max-lg:fixed max-lg:w-screen max-lg:h-[100dvh] top-0 left-0 items-center max-lg:space-y-6 lg:space-x-10 xl:space-x-20 min-[1440px]:space-x-40 justify-center lg:justify-between bg-white  lg:bg-transparent duration-500 ease-in-out lg:opacity-100 origin-bottom " + (isOpen ? " max-lg:opacity-100 max-lg:z-40 max-lg:translate-y-0" : "max-lg:opacity-0 max-lg:-z-50 max-lg:-translate-y-[100dvh]")}>
          <ul className="flex items-center justify-between max-lg:space-y-4 lg:space-x-8 xl:space-x-12 max-lg:flex-col ">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-x-2 relative group hover:cursor-pointer"  onClick={e => e.target.lastElementChild.classList.toggle('max-lg:scale-y-100')}>
              Adoption
              <Icon icon="ep:arrow-down-bold" width={18} />
              <ul className=" absolute origin-top scale-y-0 group-hover:lg:scale-y-100  duration-200 bg-white text-center top-7 shadow flex flex-col p-2 min-w-max rounded divide-y divide-slate-200">
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
            <SearchButton className="hidden lg:block" />
            <a href="#" className="text-primary hover:text-secondary">Sign in</a>
            <a href="#" className="text-white bg-primary px-2 py-1 lg:px-6 lg:rounded-[3px] lg:py-3 rounded-sm hover:bg-white hover:text-primary hover:ring-primary hover:ring-1 hover:lg:bg-transparent">Sign up</a>
          </div>
        </nav>
        <SearchButton />
      </div>
    </header>
  );
}

export default Header;
