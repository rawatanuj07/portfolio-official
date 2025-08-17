import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  // const tasks = [
  //   {
  //     text: "Managed the development of NFT Marketplace v2 for the FeverTokens platform, ensuring high-quality deliverables and successful project execution.",
  //     keywords: [
  //       "NFT Marketplace v2",
  //       "project management",
  //       "high-quality deliverables",
  //     ],
  //   },
  //   {
  //     text: "Collaborated with a team of six developers to build a temporary NFT Marketplace for the VivaTech2022 event in Paris, utilizing Next.js, Ether.js, Tailwind CSS, AWS Lambda, and Hardhat.",
  //     keywords: [
  //       "VivaTech2022",
  //       "Next.js",
  //       "Ether.js",
  //       "Tailwind CSS",
  //       "AWS Lambda",
  //       "Hardhat",
  //     ],
  //   },
  //   {
  //     text: "Interacted with blockchain and smart contracts to build and enhance the FeverTokens platform, achieving recognition from Binance and securing a one-million-dollar investment.",
  //     keywords: [
  //       "blockchain",
  //       "smart contracts",
  //       "Binance",
  //       "investment",
  //       "platform development",
  //     ],
  //   },
  // ];
  const tasks = [
    {
      text: "Taught Computer Science to students from classes 6 to 10, covering core programming concepts, algorithmic thinking, and practical computer applications.",
      keywords: [
        "Computer Science teaching",
        "classes 6-10",
        "programming concepts",
        "algorithmic thinking",
        "practical applications",
      ],
    },
    {
      text: "Delivered Data Science lessons to Class 9 students following the CBSE vocational subject curriculum (Code 419), introducing fundamentals such as data handling, analysis, and visualization.",
      keywords: [
        "Data Science",
        "Class 9",
        "CBSE curriculum",
        "vocational subject",
        "data handling",
        "data analysis",
        "data visualization",
      ],
    },
    {
      text: "Prepared students for the CBSE computer science exams by designing practical projects and hands-on learning modules emphasizing real-world problem solving.",
      keywords: [
        "CBSE exams",
        "project-based learning",
        "hands-on modules",
        "problem solving",
      ],
    },
    {
      text: "Integrated modern educational tools and software in the classroom to enhance student engagement and facilitate interactive learning.",
      keywords: [
        "educational tools",
        "software integration",
        "student engagement",
        "interactive learning",
      ],
    },
    {
      text: "Mentored students in emerging technology concepts including basics of AI and machine learning to spark early interest in advanced computer science topics.",
      keywords: [
        "mentoring",
        "AI basics",
        "machine learning",
        "emerging technologies",
        "student motivation",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Computer Science Teacher
            <span className="text-AAsecondary">@Navjeevan Public School</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-100">
            Feb - July 2022
          </span>
          {/* <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
          >
            www.fevertokens.io
          </span> */}
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-200 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
