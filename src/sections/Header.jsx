import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "../assets/brand-logo.svg";
import { Fade as Hamburger } from "hamburger-react";
import { Icon } from "@iconify/react";
import SearchButton from "../ui/SearchButton";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.getElementsByTagName('header')[0].offsetHeight
      if (window.scrollY > navHeight/1.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const head = document.getElementsByTagName('header')[0]
    Array.from(head.getElementsByTagName('a')).map(a => {
      a.addEventListener('click', () => setOpen(false))
    })
  }, [])

  return (
    <header
      className={
        "fixed top-0 z-40 w-full transition duration-300 " +
        (isScrolled ? "bg-white/80 shadow backdrop-blur" : "bg-transparent")
      }
    >
      <div
        className={
          "container mx-auto flex items-center justify-between px-2 duration-300 lg:px-8 xl:px-0 " +
          (isScrolled ? "lg:py-5" : "lg:py-10")
        }
      >
        <span className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </span>
        <a href="#">
          <img src={logo} alt="AdoptMe" />
        </a>
        <nav
          className={
            "left-0 top-0 flex origin-bottom items-center justify-center bg-white transition duration-300 ease-in-out max-lg:fixed max-lg:h-[100dvh] max-lg:w-screen max-lg:flex-col max-lg:space-y-6 lg:justify-between lg:space-x-10 lg:bg-transparent lg:opacity-100 xl:space-x-20 min-[1440px]:space-x-40 " +
            (isOpen
              ? "max-lg:z-40 max-lg:translate-y-0 max-lg:opacity-100"
              : "max-lg:-z-50 max-lg:-translate-y-[100dvh] max-lg:opacity-0")
          }
        >
          <ul className="flex items-center justify-between max-lg:flex-col max-lg:space-y-4 lg:space-x-8 xl:space-x-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li
              className="group relative flex items-center gap-x-2 hover:cursor-pointer"
              onClick={(e) =>
                e.target.lastElementChild.classList.toggle("max-lg:scale-y-100")
              }
            >
              Adoption
              <Icon icon="ep:arrow-down-bold" width={18} />
              <ul className="absolute top-7 flex min-w-max origin-top scale-y-0 flex-col divide-y divide-slate-200 rounded bg-white p-2 text-center shadow duration-200 group-hover:lg:scale-y-100">
                <li>
                  <a href="#">Dog</a>
                </li>
                <li>
                  <a href="#">Cat</a>
                </li>
                <li>
                  <a href="#">Komodo Dragon</a>
                </li>
                <li>
                  <a href="#">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#stories">Stories with pet</a>
            </li>
            <li>
              <a href="#faqs">FAQ</a>
            </li>
          </ul>
          <div className="flex items-center space-x-3 lg:space-x-6">
            <SearchButton className="hidden lg:block" />
            <a href="#" className="text-primary hover:text-secondary">
              Sign in
            </a>
            <a
              href="#"
              className="rounded-sm bg-primary px-2 py-1 text-white lg:rounded-[3px] lg:px-6 lg:py-3"
            >
              Sign up
            </a>
          </div>
        </nav>
        <SearchButton />
      </div>
    </header>
  );
}

export default Header;
