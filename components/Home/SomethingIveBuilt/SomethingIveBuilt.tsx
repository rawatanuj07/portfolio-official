import React, { useState } from "react";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon"; // Your custom ArrowIcon (not used here for toggle, but keep if needed)
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    tagline: "Interactive showcase powered by modern web technologies.",
    url: "https://neverlands-psycho.fun",
    github: 'https://github.com/rawatanuj07/Koders.git',
    video: "desktop.mp4",
    img: "portfolio-site.png",
    description: `An immersive personal portfolio built using Next.js and React, enhanced with Framer Motion animations, Node.js backend, and MongoDB for dynamic project management. Integrated with Twilio for instant contact form notifications, it ensures prompt communication. The site prioritizes mobile responsiveness, accessibility, and scalability to professionally showcase technical expertise and project accomplishments to recruiters and clients.`,
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Framer Motion",
      "Twilio",
      "Portfolio",
      "Responsive Design",
      "Real-Time Notifications",
    ],
  },

  {
    id: 2,
    title: "CryptoFlux",
    tagline: "Interpolating Historical Token Prices for Missing Blockchain Timestamps.",
    url: "https://rawats-web3-token-price-tracker.vercel.app",
    github: 'https://github.com/rawatanuj07/Koders.git',
    video: "cryptotracker.webm",
    img: "webone.png",
    description: `TokenPrice Oracle is a robust full-stack platform designed to provide historical token prices with advanced interpolation for missing timestamps. The system is built with Next.js frontend and Node.js backend, and it leverages Redis caching alongside BullMQ job scheduling for high-performance, low-latency queries. By integrating with Alchemy SDK and using Zustand for state management, it efficiently manages large datasets for Ethereum and Polygon tokens, supporting precise price retrieval essential for DeFi applications and trading analytics.`,
    tags: [
      "Full Stack",
      "Web3",
      "Next.js",
      "BlockChain",
      "Node.js",
      "Redis",
      "BullMQ",
      "Alchemy SDK",
      "Interpolation",
      "Zustand",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    title: "EventEase - Event Booking Platform",
    tagline: "Explore and book events with seamless admin control.",
    url: "https://koders-nextjs.vercel.app",
    github: 'https://github.com/rawatanuj07/Koders.git',
    video: "eventeasee.webm",
    img: "eventease.png",
    description: `EventEase is a comprehensive event booking system tailored for users and admins, offering dynamic event browsing with filters, seat booking limited to two per user, and cancellation features before events start. Admins can create and manage events, monitor attendees, and set event capacities with real-time status updates. Developed with React (Zustand), Node.js/Express, and MongoDB, it incorporates secure JWT authentication and role-based access control, while custom middleware logs booking activities. Styled with Tailwind CSS, it presents a scalable, responsive solution for modern event management.`,
    tags: [
      "Full Stack",
      "Next.js'15 ",
      "React",
      "Zustand",
      "Node.js",
"TypeScript",
"Framer",
      "MongoDB",
      "JWT Authentication",
      "Role-Based Access",
      "Middleware",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "CoreView Dashboard Framework",
    tagline: "Reusable Tailwind admin dashboard wrapped with auth & landing.",
    url: "https://admin-dashboard-sage-mu.vercel.app",
    github: 'https://github.com/rawatanuj07/admin-dashboard.git',
    video: "admindashboard.webm",
    img: "coreview.png",
    description: `CoreView Dashboard Framework accelerates admin panel development by leveraging the open-source TailAdmin Tailwind CSS template enhanced with JWT authentication for secure multi-role access and routing. Featuring over 500 customizable UI components, it supports creation of analytics, CRM, and ecommerce dashboards. Built with React and Next.js in TypeScript, CoreView provides seamless client-server integration, theme customization, and extensive documentation, making it an adaptable and maintainable solution for scalable backend applications.`,
    tags: [
      "Tailwind CSS",
      "React",
      "Next.js",
      "JWT Authentication",
      "Admin Dashboard",
      "Multi-Role Access",
      "UI Components",
      "Open Source",
      "TypeScript",
    ],
  },
  {
    id: 5,
    title: "SilkRoute -E-Commerce (EC2, WooCommerce)",
    tagline: "Cloud-hosted ecommerce with flexible product management.",
    url: "https://decode-parvati.vercel.app",
    github: "https://github.com/rawatanuj07/ecommerce-ec2.git",
    img: "/typing.png",
    description: `SilkRoute is a cloud-hosted ecommerce platform that integrates WooCommerce atop AWS EC2 and Ubuntu infrastructure to provide advanced product catalog management, order processing, and payment workflows. The platform supports seamless frontend integration, enabling customization of store layout and design. Administrators benefit from WooCommerce&apos;s extensive plugin ecosystem for SEO, marketing, and analytics. Focused on performance and security, SilkRoute ensures reliable uptime and smooth customer experience while providing a scalable and extensible foundation for enterprise-grade online retail.`,
    tags: [
      "Next.jS",
      "Full Stack",
      "Ecommerce",
      "WooCommerce",
      "AWS EC2",
      "Ubuntu",
      "React.js",
      "TypeScript",
      "Product Management",
      "Cloud Hosting",
      "Scalable Architecture",
    ],
  },
  {
    id: 6,
    title: "QuickCart - Ecommerce",
    tagline: "Launch your store with real-time visual editing, just in few minutes!",
    url: "https://ecom-dun-zeta.vercel.app/",
    github: 'https://github.com/rawatanuj07/ecom.git',
    img: "ecommerce.png",
    video: "tosend.webm",
    description: `QuickCart delivers a seamless ecommerce experience through an intuitive real-time visual editor that enables rapid store creation without coding. Integrated with Sanity CMS for no-code content management and Razorpay for secure payments, it allows merchants to effortlessly customize layouts, branding, and product filters by categories and prices. Built using Next.js and Tailwind CSS, QuickCart combines performance and responsive design to cater to startups and growing businesses seeking a versatile and scalable online storefront.`,
    tags: ["Ecommerce", "Full Stack", "Next.js'15", "Visual Live Editing", "Sanity CMS", "Razorpay", "No Code", "React.js", "TypeScript", "Framer", "Tailwind CSS"],
  },

  {
    id: 7,
    title: "POS for Pathology Lab",
    tagline: "Specialized POS solution for pathology labs.",
    url: "https://nextjs-billing-invoice-software.vercel.app",
    github: "https://github.com/rawatanuj07/Nextjs_Hospital_Management_System.git",
    video: "pos.webm",
    img: "/typing.png",
    description: `A dedicated Point-of-Sale system designed specifically for pathology laboratories to streamline patient billing, test management, and inventory control with real-time data synchronization. Built with Next.js, TypeScript, Tailwind CSS, and enhanced with Framer Motion, it supports multi-user workflows for operational efficiency. Modular design enables future expansion, including report generation and compliance tracking features.`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "POS System",
      "Healthcare",
      "Inventory Management",
      "Real-Time Data",
    ],
  },
  {
    id: 8,
    title: "Reminder Application",
    tagline: "Simple, interactive tool for managing reminders.",
    url: "https://event-planner-sooty-delta.vercel.app",
    github: "https://github.com/rawatanuj07/event-planner.git",
    img: "/typing.png",
    description: `A lightweight reminder app built with TypeScript, Tailwind CSS, and Framer Motion focused on intuitive task scheduling, viewing, and management. It supports real-time notifications and features a responsive design that ensures usability across devices, serving as an effective tool for personal productivity and daily task tracking.`,
    tags: [
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Reminders",
      "Productivity",
      "Responsive UI",
      "Real-Time Notifications",
    ],
  },
  {
    id: 9,
    title: "Software Testing Portfolio",
    tagline: "Comprehensive manual & automation testing showcase.",
    url: "https://personal-web-app-two.vercel.app/",
    github: "https://github.com/rawatanuj07/Personal_WebApp.git",
    video: "testing.webm",
    img: "/typing.png",
    description: `This portfolio highlights expertise in both manual and automated software testing through performance tracking, automation scripts, and detailed test management. Built with TypeScript, Tailwind CSS, and Framer Motion, it demonstrates creation and execution of test cases, algorithmic performance measurement, and quality assurance workflows. The collection reflects a strong commitment to software quality and presents relevant capabilities for QA roles.`,
    tags: [
      "Software Testing",
      "Manual Testing",
      "Test Automation",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "QA",
      "Performance Tracking",
      "Test Management",
    ],
  },
];



export default function SomethingIveBuilt() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  // Choose to show all projects or only the first 6
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="SomethingIveBuiltSection"
      className="bg-gradient-to-t from-AAprimary from-0% via-rose-600 via-50% to-AAprimary to-100%  px-4 sm:px-16 md:px-12 lg:px-20 xl:px-40 2xl:px-24 w-full"
    >
      {/* Title */}
      <div
        data-aos="fade-up"
        className="flex items-center space-x-4 mb-20 max-w-4xl mx-auto"
      >
        <ArrowIcon className="h-6 w-6 text-AAsecondary" />
        <span className="text-AAsecondary font-Header text-sm sm:text-xl">
          01.
        </span>
        <h2 className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wide opacity-90">
          Some Things I&apos;ve Built
        </h2>
        <div className="flex-grow border border-gray-500/[.35]" />
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-16 w-full ">
        {displayedProjects.map(
          ({ id, title, tagline, url, github, img, video, description, tags }) => (
            <div
              key={id}

              className="bg-AAprimary  backdrop-blur-lg border border-white/20 rounded-3xl relative overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-100"
              style={{
                outline: "4px solid white",
                outlineOffset: "6px",
              }}
            > 
              {(id === 1 || id === 2) && (
  <div className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold px-3 py-1 shadow-md">
    {id === 1 ? "🌟 Featured" : "🌟 LATEST!"}
  </div>
)}

          <a href={url}>
                {/* <h3 className="bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-600 bg-clip-text text-transparent font-bold text-3xl text-center p-4 "> */}
                <h3 className="text-palet underline underline-offset-4 decoration-palet font-bold text-2xl text-center p-2 ">

                  {title}
                </h3>
                <p className="text-gray-200 text-center font-bolds text-lg py-1 ">
                  {tagline}
                </p>
              </a>
              <div className="flex justify-center space-x-6 px-4 my-1">
  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} GitHub`}
      className="text-AAsecondary hover:text-white transition flex items-center space-x-1"
    >
     <span className="text-lg">GitHub:{" "} </span><GithubIcon link={github} />
    </a>
  )}
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${title} Live Site`}
    className="text-AAsecondary hover:text-white text-lg transition flex items-center space-x-1"
  >
    <span>Live-Preview</span>
    <ExternalLinkIcon className="w-6 h-6" />
  </a>
</div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-shimmer pointer-events-none z-10" />

              <div
                data-aos="fade-up"
                className="relative group rounded-3xl  shadow-lg overflow-hidden cursor-pointer flex flex-col h-auto sm:w-auto sm:h-auto"
              >

                <a

                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-t-3xl  flex-shrink-0 h-auto sm:h-auto"
                >

                  {video ? (
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105 h-auto w-full"
                    />
                  ) : (
                    <Img
                      src={img}
                      alt={`Project screenshot: ${title}`}
                      className="object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105 h-auto w-full"
                    />
                  )}
                  {/* Add overlay only for TokenPrice Oracle (id: 2)
                  {id === 2 && (
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-3xl z-20 border border-white "
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    >
                      <span className="text-palet font-bold text-2xl px-4 py-2 border border-white  bg-black/30 rounded-lg shadow-lg select-none">
                        Arriving Soon — Stay Tuned!
                      </span>
                    </div>
                  )} */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-4 z-20"></div> */}
                  <div className="flex flex-col h-auto ">

                    <ul className="flex flex-wrap justify-center space-x-3 my-2 text-xs md:text-md text-gray-300">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-gray-600 rounded m-1 px-2 py-1 select-text"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {/* <p className="text-white text-center h-auto text-sm sm:text-md md:text-lg p-1">{tagline}</p> */}
                  </div>
                </a>

                <div
  className="absolute z-50 left-0 right-0 bottom-0 bg-AAprimary/90 backdrop-blur-md text-gray-300 rounded-b-3xl flex flex-col space-y-3
  transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-6 pt-6 pb-6
  max-h-64 overflow-y-auto"
> 
  <p className="text-sm text-center leading-relaxed">{description}</p>
  <ul className="flex flex-wrap justify-center space-x-3 text-xs text-gray-400">
    {tags.map((tag) => (
      <li
        key={tag}
        className="border border-gray-600 rounded m-1 px-2 py-1 select-text"
      >
        {tag}
      </li>
    ))}
  </ul>
</div>

              </div>
            </div>
          )
        )}
      </div>

      {/* Show more button */}
      {projects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center space-x-2 text-AAsecondary hover:text-white focus:outline-none"
            aria-expanded={showAll}
            aria-label={showAll ? "Show less projects" : "Show more projects"}
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
