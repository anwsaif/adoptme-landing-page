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
    <section className="bg-gradient-to-b from-[rgba(195,222,255,0.33)] via-[rgba(216,216,216,0)] to-[rgba(190,220,255,0.22)] min-h-screen">
      <div className="h-16"></div>
      <div className="container mx-auto flex flex-col-reverse items-center justify-between px-3 gap-y-8 lg:flex-row lg:px-4 xl:px-0 lg:py-10 xl:py-28">
        <div className="flex flex-col space-y-4 lg:space-y-8">
          <h1 className="text-4xl text-primary lg:text-[54px] lg:leading-tight max-w-[518px]">
            Let’s Choose and <Icon icon={"fa:paw"} />
            Adopt your new Pet
          </h1>
          <p className="lg:text-xl max-w-[413px]">Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
          <div className="flex gap-x-9 text-lg items-center lg:text-[1.375rem]">
            <a href="#" className="bg-primary hover:bg-transparent hover:ring-1 hover:ring-primary text-white hover:text-primary rounded-[3px] py-2 px-4 lg:py-4 lg:px-8">Adopt now</a>
            <a href="#" className="hover:text-primary">Donate food</a>
          </div>
          <div className="flex gap-y-2 lg:gap-y-4 flex-col">
            <span>SUPPORTED BY:</span>
            <div className="flex gap-x-4 lg:gap-x-8">
              {supportFileNames.map((fileName) => {
                return <img src={supportPath + fileName} alt={fileName.split('.')[0].replace('-', ' ')} />
              })}
            </div>
          </div>
        </div>
        <img src={hero} alt="Hero Image" className="min-lg:lg:w-1/2 2xl:w-7/12" />
      </div>
    </section>
  );
}

export default Hero;