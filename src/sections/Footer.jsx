import React from "react";
import MainText from "../ui/MainText";

const faqs = [
  [
    [
      "How to adopt a pet?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore consequatur temporibus neque dicta laboriosam ",
    ],
    [
      "How long does the process take to adopt?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat.",
    ],
    [
      "How much should i spend to adopt?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit rem consequuntur, doloremque dolores aut?",
    ],
    [
      "Where is my nearest adoption place?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil qui hic ullam blanditiis perspiciatis vero, mollitia ipsam.",
    ],
  ],
  [
    [
      "Does adopt me also sell my dog needs?",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ],
    [
      "Was I given an official adoption letter when I adopted?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatibus.",
    ],
    [
      "What are the requirements for adopting a pet?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit eligendi?",
    ],
    [
      "What kind of care should I give my pet?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam consequuntur impedit nostrum. Id amet autem nobis.",
    ],
  ],
];

function Footer() {
  return (
    <footer id="faqs">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-12 px-3 py-9 lg:gap-x-10 lg:gap-y-24 lg:px-4 lg:py-[4.5rem] xl:px-0">
        <MainText
          title={"frequently asked questions"}
          slogan={"Adopt the pet that has waited too long"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sim dolor sit amet, consectetur adipisci."
          }
          className="items-center text-center"
        />
        <div className="flex w-full flex-col gap-x-5 md:flex-row lg:flex-row lg:gap-x-10">
          {faqs.map((data) => {
            return (
              <ul className="flex w-full flex-col 2xl:min-w-[629px]">
                {data.map((q) => {
                  return (
                    <li data-aos="fade-up">
                      <details>
                        <summary>{q[0]}</summary>
                        <p>{q[1]}</p>
                      </details>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div data-aos="fade-in" className="flex w-full flex-col items-center justify-between gap-4 border-t border-[#C6CFDC] pt-5 text-center font-[Inter] tracking-widest text-black lg:flex-row lg:pt-10">
          <span>Copyright 2023. Adoptme. All right reserved</span>
          <span>
            <a href="tel:+62811767666">(62)811-767-666</a> |{" "}
            <a href="mailto:adoptme@email.com">adoptme@email.com</a>
          </span>
        </div>
        <div className="text-center">
          <span>
            Original <a target="_blank" href="https://www.figma.com/community/file/1210923071730191941">Design</a> by <a target="_blank" href="https://www.figma.com/@yohanamarlina">Yohana Marlina</a>
          </span>
          <span className="mt-2 block">Coded by <a target="_blank" href="https://github.com/anwsaif">Anwar S</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
