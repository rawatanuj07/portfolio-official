import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Designed and executed comprehensive manual and automated test plans to validate software functionality, performance, security, and compliance with specifications across multiple platforms.",
      keywords: [
        "manual testing",
        "automated testing",
        "test planning",
        "software validation",
        "performance testing",
        "security testing",
        "compliance",
      ],
    },
    {
      text: "Developed and maintained detailed test documentation including test cases, defect reports, and traceability matrices to ensure comprehensive quality coverage and clear communication with development and product teams.",
      keywords: [
        "test documentation",
        "test cases",
        "defect reports",
        "traceability matrix",
        "communication",
      ],
    },
    {
      text: "Leveraged industry-standard testing tools and automated frameworks to streamline regression, integration, and user acceptance testing, improving efficiency and reducing release cycle times.",
      keywords: [
        "testing tools",
        "automated frameworks",
        "regression testing",
        "integration testing",
        "user acceptance testing",
      ],
    },
    {
      text: "Collaborated closely with cross-functional teams including developers, product owners, and QA to identify, document, and prioritize defects, driving timely resolution and enhancing product quality.",
      keywords: [
        "cross-functional collaboration",
        "defect management",
        "issue resolution",
        "product quality",
      ],
    },
    {
      text: "Championed QA best practices and continuous improvement by analyzing testing metrics and contributing to process optimization initiatives to enhance software reliability and customer satisfaction.",
      keywords: [
        "QA best practices",
        "continuous improvement",
        "testing metrics",
        "process optimization",
        "software reliability",
        "customer satisfaction",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg underline underline-offset-4 text-sm font-Arimo tracking-wide">
            Software Testing and Automation{" "}
            <span className="text-AAsecondary">
              @ Mystery Monks Pvt Ltd, Delhi
            </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-100">
            Oct - Dec 2022
          </span>
          {/* <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://ypredict.ai/", "_blank")}
          >
            www.ypredict.ai
          </span> */}
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
