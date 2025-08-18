import React from "react";
import { motion } from "framer-motion";

interface MyNameProps {
  finishedLoading: boolean;
}

// Word-by-word split that preserves JSX children (like styled spans)
const SplitWords = ({
  children,
  delay = 0,
  stagger = 0.02,
  finishedLoading,
}: any) => {
  const processNode = (node: React.ReactNode, wordIndex: number): React.ReactNode => {
    if (typeof node === "string") {
      // Split plain text into words
      const words = node.split(" ");
      return words.map((word, index) => (
        <motion.span
          key={`word-${wordIndex + index}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: finishedLoading ? (wordIndex + index) * stagger : delay + (wordIndex + index) * stagger,
            duration: 0.2,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ));
    } else if (React.isValidElement(node)) {
      // Handle React elements (preserve your <span className="text-AAsecondary">)
      if (node.props && "children" in node.props && node.props.children) {
        const processedChildren = processNode(node.props.children, wordIndex);
        return React.cloneElement(node, node.props, processedChildren);
      }
      return node;
    } else if (Array.isArray(node)) {
      // Handle array of nodes
      let currentWordIndex = wordIndex;
      return node.map((child, index) => {
        const result = processNode(child, currentWordIndex);
        if (typeof child === "string") {
          currentWordIndex += child.split(" ").length;
        }
        return result;
      });
    }
    return node;
  };

  return (
    <h3 className="text-gray-300 font-semibold sm:font-md text-sm text-center md:text-xl sm:text-md mt-2 sm:mt-10 tracking-wider leading-relaxed">
      {processNode(children, 0)}
    </h3>
  );
};

const MyName: React.FC<MyNameProps> = (props) => {
  const getDelay = (baseDelay: number) => {
    if (props.finishedLoading) {
      return 0;
    }
    return baseDelay;
  };

  return (
    <div
      className="h-full flex flex-col justify-center
      px-4 sm:px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-20 sm:py-32 relative"
    >
      <div className="flex flex-col items-center justify-center h-auto w-full">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 10.4,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.4,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-AAsecondary font-mono"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 10.5,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.5,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Anuj Rawat .
        </motion.h1>

        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 10.6,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.6,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-center bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-600
            bg-clip-text text-transparent font-bold text-2xl sm:text-3xl  lg:text-5xl py-4  mb-0 md:pb-2 md:mb-2"
        >
          Pixels, packets, or protocols — I like making them play nicely together.
        </motion.h2>
      </div>

      {/* Word-by-word animated description */}
      <SplitWords finishedLoading={props.finishedLoading} delay={getDelay(10.7)}>
        I&apos;m a{" "}
        <span className="text-AAsecondary keyword-hover">
          Full Stack Software Engineer
        </span>{" "}
        specialized in architecting and developing{" "}
        <span className="text-AAsecondary keyword-hover">
          scalable, high-performance applications
        </span>. I&apos;m proficient in both{" "}
        <span className="text-AAsecondary keyword-hover">front-end</span> and{" "}
        <span className="text-AAsecondary keyword-hover">back-end technologies</span>{" "}
        with hands-on expertise in{" "}
        <span className="text-AAsecondary keyword-hover">Web3 development</span>{" "}
        (Solidity, smart contract integration, and blockchain APIs) as well as{" "}
        <span className="text-AAsecondary keyword-hover">
          traditional web ecosystems
        </span>. My skill set extends to designing and deploying{" "}
        <span className="text-AAsecondary keyword-hover">
          secure, cloud-native solutions
        </span>{" "}
        on platforms like{" "}
        <span className="text-AAsecondary keyword-hover">AWS</span> with{" "}
        <span className="text-AAsecondary keyword-hover">CI/CD Automation</span>.
        <br className="3xl:block hidden" />
        Passionate about solving{" "}
        <span className="text-AAsecondary keyword-hover">
          complex engineering problems
        </span>, I leverage best practices in{" "}
        <span className="text-AAsecondary keyword-hover">
          software architecture
        </span>,{" "}
        <span className="text-AAsecondary keyword-hover">system design</span>, and{" "}
        <span className="text-AAsecondary keyword-hover">
          performance optimization
        </span>{" "}
        to deliver{" "}
        <span className="text-AAsecondary keyword-hover">
          resilient, maintainable, and future-ready solutions
        </span>{" "}
        that drive{" "}
        <span className="text-AAsecondary keyword-hover">
          measurable business impact
        </span>.
      </SplitWords>

      <motion.a
        href={"/rexume-x.pdf"} 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-6 sm:mt-12 text-center"
      >
        <a target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover">
            Check out my resume!
          </button>
        </a>
      </motion.a>

      {/* Scroll Down Indicator */}
      <motion.div
    
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: props.finishedLoading ? 0 : 11, duration: 0.5 }}
        className="bg-AAprimary text-AAsecondary  mx-auto sm:px-8 my-12 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out"
      >
<a href="#SomethingIveBuiltSection">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default MyName;
