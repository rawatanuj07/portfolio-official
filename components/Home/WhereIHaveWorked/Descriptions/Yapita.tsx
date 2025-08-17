// components/Experience/EnergyInstitute.js (or wherever you place it)

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
import { getTasksTextWithHighlightedKeyword } from "./taskAndType"; // Adjust path

export default function Yapita() {
  const tasks = [
    {
      text: "Developed and maintained responsive and dynamic web applications using React and Next.js, ensuring seamless user experiences and optimized frontend performance.",
      keywords: [
        "React",
        "Next.js",
        "responsive web",
        "frontend performance",
        "dynamic applications",
      ],
    },
    {
      text: "Designed and implemented scalable RESTful APIs and server-side logic using Node.js, integrating with frontend components to provide robust full-stack solutions.",
      keywords: [
        "API design",
        "server-side logic",
        "Node.js",
        "full-stack development",
        "integration",
      ],
    },
    {
      text: "Managed database schema design, data modeling, and query optimization for both MongoDB (NoSQL) and SQL databases, ensuring efficient data retrieval and storage.",
      keywords: [
        "database design",
        "MongoDB",
        "SQL databases",
        "data modeling",
        "query optimization",
      ],
    },
    {
      text: "Collaborated closely with product managers, UI/UX designers, and QA teams to translate business requirements into high-quality technical solutions and deliverables.",
      keywords: [
        "collaboration",
        "product management",
        "UI/UX designers",
        "quality assurance",
        "business requirements",
      ],
    },
    {
      text: "Implemented CI/CD pipelines, automated testing, and code review best practices to ensure smooth deployments and maintainable, bug-free codebases.",
      keywords: [
        "CI/CD",
        "automated testing",
        "code reviews",
        "deployments",
        "code quality",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Engineer{" "}
            <span className="text-AAsecondary">
              @ Yapita Health Private Limited
            </span>{" "}
            {/* Or your preferred color */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-200">
            July - Oct 2023
          </span>
         
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />{" "}
                {/* Or your preferred color */}
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
