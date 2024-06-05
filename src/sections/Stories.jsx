import React from "react";
import MainText from "../ui/MainText";

function Stories() {
  return (
    <section id="stories">
      <div className="container mx-auto flex flex-col items-center lg:gap-x-10 justify-between gap-y-11 px-3 py-9 lg:flex-row lg:gap-y-20 lg:px-4 lg:py-[4.5rem] xl:px-0">
        <img
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
          <a href="#" className="bg-primary rounded-[3px] text-white text-lg lg:text-2xl inline py-3 lg:py-6 px-6 lg:px-12 w-fit">Sponsor now</a>
        </div>
        
      </div>
    </section>
  );
}

export default Stories;
