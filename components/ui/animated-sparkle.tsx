// components/Sparkles.tsx
"use client";

import React from "react";
import {
  motion,
  useAnimation,
  type AnimationControls,
  type Variants,
} from "motion/react";

const starVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sparkleVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  animate: (i: number) => ({
    x: [0, 2, -1, 1, -2, 0][i % 6],
    y: [0, -1, 1, -2, 1, 0][i % 6],
    opacity: [1, 0.7, 1, 0.5, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: i * 0.2,
    },
  }),
};

export interface SparklesProps extends React.SVGAttributes<SVGSVGElement> {
  controls?: AnimationControls;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

export function Sparkles({
  controls: externalControls,
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SparklesProps) {
  const internalControls = useAnimation();
  const controls = externalControls ?? internalControls;

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
          variants={starVariants}
          initial="normal"
          animate={controls}
        />
        {[0, 1].map((i) => (
          <motion.g
            key={i}
            variants={sparkleVariants}
            custom={i}
            initial="normal"
            animate={controls}
          >
            {i === 0 ? (
              <>
                <motion.path d="M20 3v4" />
                <motion.path d="M22 5h-4" />
              </>
            ) : (
              <>
                <motion.path d="M4 17v2" />
                <motion.path d="M5 18H3" />
              </>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
