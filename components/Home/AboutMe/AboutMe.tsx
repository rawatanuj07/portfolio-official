import React, { useState } from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const [active, setActive] = useState(false);

  const handleTouch = () => {
    setActive(!active);
  };

  const technologies = [
    [
      "Next.js-15/React",
      "TypeScript/JavaScript",
      "Tailwind/Framer",
      "Redis",
      "GitHub/Docker",
    ],
    [
      "Node.js",
      "Aws/Web3",
      "RabbitMQ/BullMQ",
      "MongoDB/SQL Databases",
      "Python/Java/Selenium",
    ],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-10 my-20 bg-AAprimary"
    >
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[800px] md:w-[900px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              02.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Tech Stack
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-md font-bold">
            {/* <div className="font-Header text-gray-300 text-justify">
              Hey there! I&apos;m Anuj, and I&apos;m pretty obsessed with
              building cool stuff with code. My tech journey began about a year after my graduation when I initially encountered{" "}
              <span className="text-AAsecondary">Java</span>, and was
              instantly hooked. That curiosity led me down a rabbit hole of
              programming that I&apos;m still happily stuck in today.
            </div>
            <div className="font-Header text-gray-300 text-justify">
              After years of teaching myself and eventually getting the{" "}
              <span className="text-AAsecondary">expertise</span>, I&apos;ve
              spent <span className="text-AAsecondary">+3 years</span> honing my
              skills professionally and have been lucky enough to work with some
              really interesting companies and startups. Over the last few years,
              I&apos;ve architected and delivered high-performance, scalable applications across a variety of industries.
            </div>
            
            <div className="font-Header text-gray-300 text-justify">
              I&apos;m passionate about tackling new technical challenges and
              rapidly picking up emerging tools and frameworks—especially in the
              domains of {" "}
              <span className="text-AAsecondary">Web3, Development</span>,
              and <span className="text-AAsecondary">Automation </span>. I thrive
              on opportunities to design scalable systems that drive business
              value and innovation.
            </div> */}
            <div className="font-Header tracking-wide text-gray-300 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col space-y-4 sm:text-base text-sm"
                >
                  {techGroup.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon
                        className={"h-3 w-3 text-AAsecondary flex-none"}
                      />
                      <span className="text-gray-300 sm:text-sm text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="font-Header text-gray-300 pt-4 text-justify">
            Pixels, packets, or protocols —I like making them play nicely together, whether that means scaling a web3 platform, orchestrating massive data pipelines, or fine-tuning the last millisecond out of a web app. For me, it&apos;s about turning complexity into something seamless, where every layer matters, and the magic happens when they all move as one.
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group hover:cursor-pointer relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            {/* Border frame that moves and covers image on hover */}
            <div className="group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-[calc(84%)] group-hover:h-[calc(84%)] duration-500 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded rounded-lg"></div>

            {/* Image container with overlay */}
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              {/* Default overlay that disappears on hover */}
              <div className="absolute inset-0 w-full h-full bg-AAsecondary opacity-20 group-hover:opacity-0 duration-300 rounded z-10"></div>

              {/* Image */}
              <Img
                src="/img/fphk.jpg"
                width={1369}
                height={1369}
                className={"object-cover w-full h-full rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div
            className="relative w-full h-64 md:hidden flex justify-center items-center "
            // onClick={handleTouch}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouch}
          >
            <div
              className={`absolute w-72 h-full rounded border-r-2 border-b-2 border-AAsecondary transition-transform duration-300 ${
                active
                  ? "translate-x-1 translate-y-1"
                  : "translate-x-5 translate-y-5"
              }`}
            ></div>
            <div className="absolute w-72 h-full rounded overflow-hidden">
              <Img
                src={"/img/fphk.jpg"}
                className={`object-contain rounded-lg z-99 ${
                  active ? "" : "bg-AAsecondary opacity-70 z-99"
                }`}
                alt="My Image Not Found"
                width={1369}
                height={1369}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
