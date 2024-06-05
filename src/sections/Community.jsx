import React, { useEffect } from "react";
import MainText from "../ui/MainText";
import Numbers from "../ui/Numbers";

const nums = [
  { num: "150+", desc: "proin vestibulum, duis. im dol." },
  { num: "2k+", desc: "proin ulduis. isimuim dol." },
  { num: "3k+", desc: "proin vestibulum, duis. im dua." },
];
function Community() {
  useEffect(() => {
    document.getElementById("community").style.scrollMarginTop =
      document.getElementsByTagName("header")[0].offsetHeight + "px";
  }, []);
  return (
    <section id="community">
      <div className="container mx-auto flex flex-col gap-y-11 px-3 py-9 lg:gap-y-20 lg:px-4 xl:px-0 lg:py-[4.5rem]">
        <div className="grid grid-cols-1 space-y-10 lg:grid-cols-2 lg:space-y-24">
          <MainText
            title={"our mission for pet"}
            slogan={"Let’s Choose and Adopt your New Lovely Pet"}
          />
          <MainText
            description={`You need to see some pets in Adoptme. We have the friend that's you need to have. We also have the equipment you need to take care of it.`}
            className={"!mt-3 lg:mt-6"}
            descClass="mt-auto"
          />
          <img src="/src/assets/community.png" alt="Community" />
          <div className="flex flex-col gap-y-7 lg:gap-y-14">
            <MainText
              title={"adoptme community"}
              slogan={"Connect with adoptme across the country"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consec"
              }
            />
            <div className="flex max-w-[513px] justify-between gap-x-4 lg:gap-x-8">
              {nums.map(({ num, desc }, i) => (
                <Numbers key={i} num={num} desc={desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
