import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Providing end-to-end software development services as a freelance developer, working directly with clients to deliver custom web applications tailored to their specific business needs.",
      keywords: [
        "freelance developer",
        "custom software",
        "web applications",
        "mobile applications",
        "client collaboration",
      ],
    },
    {
      text: "Manage all phases of the project lifecycle including requirements gathering, system design, development, testing, deployment, and ongoing support, ensuring client satisfaction and timely delivery.",
      keywords: [
        "project lifecycle",
        "requirements gathering",
        "system design",
        "testing",
        "deployment",
        "client satisfaction",
      ],
    },
    {
      text: "Utilize a broad tech stack including React, Next.js, Node.js, MongoDB, and SQL to architect scalable and maintainable solutions for diverse client projects.",
      keywords: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "SQL",
        "scalable solutions",
        "maintainable code",
      ],
    },
    {
      text: "Communicate effectively with clients to understand their business goals, provide technical recommendations, and adapt solutions dynamically to evolving project requirements.",
      keywords: [
        "client communication",
        "technical recommendations",
        "business goals",
        "solution adaptation",
      ],
    },
    {
      text: "Stay up to date with emerging technologies and best practices to continuously improve freelance service offerings and deliver innovative solutions.",
      keywords: [
        "emerging technologies",
        "best practices",
        "continuous improvement",
        "innovative solutions",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-200 sm:text-lg underline underline-offset-4 text-sm font-Arimo tracking-wide">
            Full Stack Engineer{" "}
            <span className="text-AAsecondary">@ Freelance</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-200">
            May 2024 - Present
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
