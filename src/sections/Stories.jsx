import React from "react";
import MainText from "../ui/MainText";

function Stories() {
  return (
    <section id="stories">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-11 px-3 py-9 lg:flex-row lg:gap-x-10 lg:gap-y-20 lg:px-4 lg:py-[4.5rem] xl:px-0">
        <img
          data-aos='fade-right'
          src="/src/assets/stories.png"
          alt="Stories Image"
          className="lg:w-1/2"
        />
        <div className="flex flex-col gap-y-5 lg:gap-y-10">
          <MainText
            title={"stories with pet"}
            slogan={"Sponsoring your pet before adopt"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisc."
            }
          />
          <a data-aos="fade-up" data-aos-duration="800" href="#" className="inline w-fit rounded-[3px] bg-primary px-6 py-3 text-lg text-white lg:px-12 lg:py-6 lg:text-2xl">Sponsor now</a>
        </div>
        
      </div>
    </section>
  );
}

export default Stories;
