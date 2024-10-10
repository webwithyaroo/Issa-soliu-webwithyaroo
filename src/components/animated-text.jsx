"use client";

import { twMerge } from "tailwind-merge"; // Replace cn with twMerge
import { motion } from "framer-motion";
import React from "react";

const AnimatedLetter = ({ animation, character }) => (
  <motion.span
    className="relative top-1/4 inline-block whitespace-nowrap"
    variants={animation}
  >
    {character}
  </motion.span>
);

const AnimatedWord = ({ animation, isHovered, title }) => (
  <motion.span
    animate={isHovered ? "hover" : "rest"}
    className="relative      whitespace-nowrap"
    initial="rest"
    variants={titleAnimation}
  >
    {title
      .split("")
      .map((character, i) =>
        character === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <AnimatedLetter key={i} animation={animation} character={character} />
        )
      )}
  </motion.span>
);

export default function AnimatedLink({
  children,
  className,
  title,
  type = "",
}) {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className={twMerge("relative cursor-pointer overflow-hidden ", className)} // Use twMerge
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatedWord
        animation={letterAnimation}
        isHovered={isHovered}
        title={title}
      />
      <div
        className={twMerge(
          "absolute w-full",
          type === "button" ? "top-1/4" : "top-0"
        )}
      >
        <AnimatedWord
          animation={letterAnimationTwo}
          isHovered={isHovered}
          title={title}
        />
      </div>
      {children}
    </motion.div>
  );
}

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
