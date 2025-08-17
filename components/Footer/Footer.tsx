import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpworkIcon from "../Icons/UpworkIcon";
const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/rawatanuj07", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/anuj-rawat-a0889320a/",
    Icon: LinkedinIcon,
  },
  { href: "https://www.instagram.com/rawatanuj07/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@AnujRawat-w8o", Icon: YoutubeIcon },
  { href: "https://www.upwork.com/freelancers/~01abfbedb585eb8b04?mp_source=share", Icon: UpworkIcon },
];

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => {
          return (
            <ClickableIcon
              key={index}
              href={iconData.href}
              Icon={iconData.Icon}
            />
          );
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Anuj Rawat.
          </span>
        </div>
      </a>
    </div>
  );
}
