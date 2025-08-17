import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import TrouveTavoie from "./Descriptions/TrouveTavoie";
import FeverTokens from "./Descriptions/FeverTokens";
import IdealFresh from "./Descriptions/IdealFresh";
import SuperBerry from "./Descriptions/SuperBerry";
import EnsVision from "./Descriptions/EnsVision";
import YpredictAI from "./Descriptions/YpredictAI";
import Yapita from "./Descriptions/Yapita";

export default function WhereIHaveWorked() {
  const [DescriptionJob, setDescriptionJob] = React.useState("Freelance");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Heliverse":
        return <EnsVision />;
      case "Mystery Monks":
        return <YpredictAI />;
      case "Aaklan":
        return <TrouveTavoie />;
      case "Navjeevan":
        return <FeverTokens />;
      case "Decode Parvati":
        return <IdealFresh />;
      case "Freelance":
        return <SuperBerry />;
      case "Yapita":
        return <Yapita />;
      default:
        return null;
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            03.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Content */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start"
      >
        {/* Left bar and companies button list */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* Job Description component */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: { setDescriptionJob: (job: string) => void }) => {
  const [activeIndex, setActiveIndex] = React.useState(1); // default active EnergyInstitute
  const containerHeight = 390; // must match the h-[390px] Tailwind height!
  const numberOfButtons = 7;
  const stepSize = containerHeight / numberOfButtons;
  const companyNames = [
    "Freelance",
    "Yapita",
    "Heliverse",
    "Mystery Monks",
    "Aaklan",
    "Navjeevan",
    "Decode Parvati",
  ];

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row w-screen md:w-auto lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center"
    >
      {/* Vertical gray track */}
      <div className="hidden md:block bg-gray-500 relative h-[390px] w-0.5 rounded md:order-1 order-2 translate-y-1">
        <motion.div
          animate={{ y: activeIndex * stepSize }}
          className="absolute w-0.5 h-12 rounded bg-AAsecondary"
        />
      </div>

      {/* Company buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          {companyNames.map((name, index) => (
            <button
              key={name}
              onClick={() => {
                setActiveIndex(index);
                // Special case to map "Ypredict.io" button label to "YpredictAI" description
                props.setDescriptionJob(
                  name === "Ypredict.io" ? "YpredictAI" : name
                );
              }}
              className={`flex-none sm:text-lg text-xs text-center md:text-left hover:text-AAsecondary hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 ${
                activeIndex === index
                  ? "bg-ResumeButtonHover text-AAsecondary"
                  : "text-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
