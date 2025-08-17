import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Managed daily operations of a cozy cafe located in Kheerganga, Parvati Valley, nestled in the Himalayas, providing a warm and welcoming atmosphere for travelers and locals alike.",
      keywords: [
        "operations",
        "cozy cafe",
        "Kheerganga",
        "Parvati Valley",
        "Himalayas",
      ],
    },
    {
      text: "Curated a menu featuring locally sourced ingredients and traditional Himalayan beverages, attracting tourists seeking authentic flavors and experiences.",
      keywords: [
        "menu",
        "locally sourced",
        "traditional Himalayan beverages",
        "tourists",
      ],
    },
    {
      text: "Handled inventory, supplier coordination, and customer service while adapting to seasonal fluctuations and remote location challenges.",
      keywords: [
        "inventory",
        "supplier coordination",
        "customer service",
        "seasonal fluctuations",
        "remote location",
      ],
    },
    {
      text: "Built strong relationships with the local community and trekkers by offering personalized service, fostering a loyal customer base in a remote mountain setting.",
      keywords: [
        "local community",
        "trekkers",
        "personalized service",
        "loyal customer base",
        "remote mountain",
      ],
    },
    {
      text: "Implemented sustainable practices such as waste reduction and sourcing eco-friendly materials to minimize the cafe’s environmental impact in the fragile Himalayan ecosystem.",
      keywords: [
        "sustainable practices",
        "waste reduction",
        "eco-friendly materials",
        "environmental impact",
        "Himalayan ecosystem",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg underline underline-offset-8 text-sm font-Arimo tracking-wide">
            Café - Decode Parvati
            <span className="text-AAsecondary">@Kheerganga -Himalayas!</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-100 mt-4">
            Apr&apos;21 - Jan 2022
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
