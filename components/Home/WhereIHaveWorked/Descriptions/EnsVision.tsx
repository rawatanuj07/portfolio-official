import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Directed comprehensive end-to-end QA strategies encompassing risk assessments, quality metrics definition, and continuous process improvements to ensure product excellence across the software development lifecycle.",
      keywords: [
        "end-to-end QA",
        "risk assessments",
        "quality metrics",
        "process improvements",
        "software development lifecycle",
      ],
    },
    {
      text: "Led quality audits and compliance reviews ensuring adherence to industry standards, organizational policies, and regulatory requirements, achieving consistently high audit ratings.",
      keywords: [
        "quality audits",
        "compliance",
        "industry standards",
        "regulatory requirements",
      ],
    },
    {
      text: "Mentored and trained junior and mid-level QA engineers, fostering a culture of continuous learning, knowledge sharing, and high performance within the QA team.",
      keywords: [
        "mentoring",
        "training",
        "QA engineers",
        "knowledge sharing",
        "team development",
      ],
    },
    {
      text: "Architected and maintained automated test suites for regression, performance, and load testing, significantly increasing test coverage while accelerating release cycles.",
      keywords: [
        "automated test suites",
        "regression testing",
        "performance testing",
        "load testing",
        "test coverage",
        "release cycles",
      ],
    },
    {
      text: "Collaborated with product managers, developers, and stakeholders to define clear quality goals and acceptance criteria, ensuring delivery aligned with business objectives and customer expectations.",
      keywords: [
        "collaboration",
        "quality goals",
        "acceptance criteria",
        "product management",
        "stakeholder alignment",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg underline underline-offset-4 text-sm font-Arimo tracking-wide">
            Quality Analyst{" "}
            <span className="text-AAsecondary">@ Heliverse Technologies</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-100">
            Jan - June 2023
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
