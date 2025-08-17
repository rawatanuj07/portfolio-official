import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {


  const tasks = [
    {
      text: "Delivered programming workshops to middle and high school students across different schools under Aaklan’s specialized curriculum, focusing on practical programming skills and problem-solving techniques.",
      keywords: [
        "coding instruction",
        "middle and high school",
        "specialized curriculum",
        "practical programming",
        "problem-solving",
      ],
    },
    {
      text: "Adapted and customized Aaklan’s proprietary curriculum to meet the unique learning needs and skill levels of diverse student groups, ensuring effective knowledge transfer and engagement.",
      keywords: [
        "curriculum customization",
        "proprietary curriculum",
        "student engagement",
        "skill adaptation",
      ],
    },
    {
      text: "Facilitated hands-on coding workshops and project-based learning sessions, empowering students to build real-world applications and fostering an interactive classroom environment.",
      keywords: [
        "hands-on workshops",
        "project-based learning",
        "real-world applications",
        "interactive classroom",
      ],
    },
    {
      text: "Coordinated with school administrators and Aaklan’s education team to align teaching objectives, report student progress, and continuously improve instructional methods.",
      keywords: [
        "team coordination",
        "school administrators",
        "student progress",
        "instructional improvement",
      ],
    },
    {
      text: "Mentored students in emerging technologies and encouraged critical thinking, cultivating curiosity and foundational skills to prepare them for advanced computer science topics.",
      keywords: [
        "mentoring",
        "emerging technologies",
        "critical thinking",
        "student curiosity",
        "foundational skills",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Coding Instructor
            <span className="text-AAsecondary">@ Aaklan</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan - Sept 2022
          </span>
         
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
