import React from "react";
import hero from "../assets/hero.png";
import { Icon } from "@iconify/react";

const supportPath = '/src/assets/supported-by/'
const supportFileNames = [
  'animal-defenders.svg',
  'gresik-animal-care.svg',
  'komunitas-pecinta-kucing-seluruh-indonesia.svg',
  'komunitas-pecinta-kucing-semarang.svg',
]

function Hero() {
  return (
    <section className=" min-h-screen" id="home">
      <div className="h-16"></div>
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-x-8 gap-y-8 px-3 lg:flex-row lg:px-6 lg:py-20 xl:px-0 xl:py-28">
        <div data-aos='fade-right' className="flex flex-col space-y-4 lg:space-y-8">
          <h1 className="max-w-[518px] text-4xl text-primary lg:text-[54px] lg:leading-tight">
            Let’s Choose and <Icon icon={"fa:paw"} />
            Adopt your new Pet
          </h1>
          <p className="max-w-[413px] lg:text-xl">Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
          <div className="flex items-center gap-x-9 text-lg lg:text-[1.375rem]">
            <a href="#" className="rounded-[3px] bg-primary px-4 py-2 text-white lg:px-8 lg:py-4">Adopt now</a>
            <a href="#" className="hover:text-primary">Donate food</a>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <span>SUPPORTED BY:</span>
            <div className="flex gap-x-4 lg:gap-x-8">
              {supportFileNames.map((fileName) => {
                return <img src={supportPath + fileName} alt={fileName.split('.')[0].replace('-', ' ')} />
              })}
            </div>
          </div>
        </div>
        <img data-aos='fade-left' src={hero} alt="Hero Image" className="max-lg:w-auto lg:w-5/12 2xl:w-7/12" />
      </div>
    </section>
  );
}

export default Hero;
