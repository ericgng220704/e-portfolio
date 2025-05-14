"use client";

import { useState } from "react";
import { InView } from "../ui/in-view";
import { ProgressiveBlur } from "../motion-primitives/progressive-blur";
import { motion } from "motion/react";

interface imageGridProp {
  src: string;
  text: string;
}

export function InViewImagesGrid({ images }: { images: imageGridProp[] }) {
  return (
    <div className="flex h-[64rem] items-end justify-center pb-12">
      <InView
        viewOptions={{ once: true, margin: "0px 0px 0px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.09 },
          },
        }}
      >
        <div className="gap-4 px-8 columns-2 sm:columns-3">
          {images.map((image, i) => (
            <GridItem key={i} src={image.src} text={image.text} />
          ))}
        </div>
      </InView>
    </div>
  );
}

function GridItem({ src, text }: { src: string; text: string }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      }}
      className="mb-4"
    >
      <div
        className="relative size-full rounded-lg overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={src}
          alt=""
          className="size-full object-contain hover:scale-[1.04] transition-all duration-500"
        />

        {/* Progressive blue blur on hover */}
        <ProgressiveBlur
          className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
          blurIntensity={0.5}
          animate={hover ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 "
          animate={hover ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-0 px-5 py-4">
            <span className="text-base text-gray-600">{text}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
