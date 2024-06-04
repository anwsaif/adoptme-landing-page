import React from "react";
import hero from "../assets/hero.png";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <section>
      <div className="h-16"></div>
      <div className="container mx-auto flex flex-col-reverse flex-wrap items-center justify-between px-3 gap-y-8 lg:flex-row lg:px-4 lg:py-10 xl:py-28">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl text-primary lg:text-[54px]">
            Let’s Choose and <Icon icon={"fa:paw"} />
            Adopt your new Pet
          </h1>
          <p>Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
          <div className="flex gap-x-9 text-lg items-center">
            <a href="#" className="bg-primary hover:bg-transparent hover:ring-1 hover:ring-primary text-white hover:text-primary rounded-[3px] py-2 px-4">Adopt now</a>
            <a href="#" className="hover:text-primary">Donate food</a>
          </div>
        </div>
        <img src={hero} alt="Hero Image" className="lg:w-1/2" />
      </div>
    </section>
  );
}

export default Hero;
