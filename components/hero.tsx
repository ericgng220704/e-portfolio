"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { Tilt } from "./ui/tilt";
import { RiSparkling2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiDrizzle, SiShadcnui } from "react-icons/si";
import TextReveal from "./ui/textReveal";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CTAButton from "./cta_button";
import { TiLocationArrow } from "react-icons/ti";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";
import { SiNextdotjs } from "react-icons/si";
import { FaDownload, FaReact } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { useAnimation } from "motion/react";
import React, { JSX, useEffect, useState } from "react";
import { SlidingNumber } from "./motion-primitives/sliding-number";
import { Sparkles } from "./ui/animated-sparkle";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
  const sparklesControls = useAnimation();

  return (
    <section className={cn("px-4 md:px-16 lg:px-36 w-full", "hero-bento-box")}>
      <div
        style={{
          gridArea: "box-1",
        }}
        className="flex flex-col justify-between gap-3 [@media(max-width:650px)]:flex-row [@media(max-width:500px)]:!flex-col [@media(max-width:500px)]:!items-center  [@media(max-width:650px)]:justify-normal "
      >
        <div>
          <Tilt
            rotationFactor={4}
            isRevese
            style={{
              transformOrigin: "center center",
            }}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
            className="group relative rounded-lg"
          >
            <Spotlight
              className="z-10 from-white/70 via-white/40 to-white/30 blur-2xl"
              size={248}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
            />
            <Image
              src={"/hero.jpg"}
              alt="Eric Nguyen chilling"
              className="rounded-lg object-cover duration-700 group-hover:grayscale-0"
              height={600}
              width={300}
            />
          </Tilt>
        </div>
        <div className="h-full flex flex-col justify-between gap-3 [@media(max-width:650px)]:grow min-w-min [@media(max-width:500px)]:!w-full">
          <div className="w-full h-full overflow-hidden [@media(max-width:500px)]:hidden [@media(min-width:650px)]:hidden block rounded-lg">
            <Blockquote className="text-base size-full">
              Hey, you’ve hit the sweet spot between 500 px and 650 px—nice! 🎉
            </Blockquote>
          </div>

          <Card className="h-full w-full text-white flex items-center justify-between px-4 relative max-h-16 min-h-12">
            <div className="flex items-center gap-1 text-white text-lg z-20">
              <FaCity />
              <span>Winnipeg :</span>
            </div>

            <div className="absolute top-0 left-0 size-full bg-black/50 z-10"></div>

            <img
              src={"/winnipeg.jpg"}
              alt="winnipeg city"
              className="absolute top-0 left-0 size-full object-cover filter blur-[1.2px]"
            />

            <LiveClock />
          </Card>
          <div>
            <CTAButton
              id="cta button"
              containerClass="w-full flex items-center gap-1 text-2xl !px-0 font-semibold justify-center tracking-[0.3rem] !rounded-xl"
              title="Explore"
              rightIcon={<TiLocationArrow />}
            />
          </div>
        </div>
      </div>
      <Card
        className="max-h-[20rem] [@media(max-width:650px)]:max-h-max group"
        style={{
          gridArea: "box-2",
        }}
      >
        <Spotlight
          className="z-10 from-white/70 via-white/40 to-white/30 blur-2xl"
          size={124}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <CardHeader className="group-hover:!text-white transition-colors duration-500">
          <div className="flex w-full items-start justify-between">
            <TextReveal>
              <CardTitle className="font-bold text-4xl md:text-5xl lg:text-5xl text-white flex flex-col gap-3 mb-20 group-hover:!text-white transition-colors duration-500">
                <div>
                  <span>I'm Eric Nguyen</span>
                </div>
              </CardTitle>
            </TextReveal>

            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_231_793)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z"
                    fill="url(#paint0_linear_231_793)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_231_793"
                    x1="177"
                    y1="-9.23648e-06"
                    x2="39.5"
                    y2="152.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#B0B9FF" />{" "}
                    <stop offset="1" stopColor="#E7E9FF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_231_793">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>

          <CardDescription className="text-gray-400 text-base font-normal group-hover:!text-white transition-colors duration-500">
            <span>
              Ever since crafting my first webpage, I've been passionate about
              blending visual beauty with purposeful functionality—believing
              that great design is like true beauty: captivating on the outside,
              meaningful on the inside. Specializing in modern front-end
              technologies and intuitive interfaces, I craft digital experiences
              that not only stand out aesthetically but also enrich and inspire
              their communities.
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
      <div
        className="group"
        style={{
          gridArea: "box-3",
        }}
      >
        <Card className="group-hover:!text-white transition-colors duration-500 relative">
          <Spotlight
            className="z-10 from-white/70 via-white/40 to-white/30 blur-2xl"
            size={124}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          />
          <CardHeader
            className="z-10"
            onMouseEnter={() => sparklesControls.start("animate")}
            onMouseLeave={() => sparklesControls.start("normal")}
          >
            <CardTitle className="font-bold text-3xl md:text-4xl lg:text-4xl text-gray-200 group-hover:!text-white flex flex-col gap-3 mb-6 transition-colors duration-500">
              <TextReveal>
                <div className="flex items-center justify-between">
                  <span>SKILLS</span>
                  <span>
                    <Sparkles controls={sparklesControls} />
                  </span>
                </div>
              </TextReveal>
            </CardTitle>

            <CardDescription className="flex flex-col gap-1 text-gray-400 group-hover:!text-white text-base font-normal transition-colors duration-500">
              <span>Frontend development</span>
              <span>Fullstack development</span>
              <span>Database Management</span>
              <span>AI Agent Building & Integration</span>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card
        className="!p-2 !m-0"
        style={{
          gridArea: "box-4",
        }}
      >
        <Spotlight
          className="z-10 from-white/70 via-white/40 to-white/30 blur-2xl"
          size={124}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <CardContent className="flex flex-col !p-0 !m-0 h-full gap-2">
          <div className="flex items-center gap-2 h-1/3">
            <div className="link-box flex items-center justify-center h-full w-1/2 rounded-2xl flex-col border border-gray-200">
              <span className="text-4xl font-bold text-gray-200">LIN</span>
              <span className="text-4xl font-bold text-gray-200">KS:</span>
            </div>
            <div className="cursor-pointer link-box flex items-center justify-center bg-gradient-to-bl from-[#B0B9FF]  to-[#E7E9FF] h-full w-1/2 rounded-2xl hover:!bg-transparent  hover:text-white transition-all duration-500">
              <IoLogoGithub className="w-10 h-10" />
            </div>
          </div>
          <div className="cursor-pointer link-box flex items-center gap-2 h-1/3">
            <div className="flex items-center justify-center bg-[#E7E9FF] h-full w-1/2 rounded-2xl hover:bg-transparent hover:text-white transition-all duration-500">
              <FaLinkedinIn className="w-10 h-10" />
            </div>
            <div className="cursor-pointer link-box flex items-center justify-center  bg-[#E7E9FF] h-full w-1/2 rounded-2xl hover:bg-transparent hover:text-white transition-all duration-500">
              <FaFacebook className="w-10 h-10" />
            </div>
          </div>
          <div className="cursor-pointer link-box flex items-center gap-2 h-1/3">
            <div className="flex items-center justify-center bg-gradient-to-tr from-[#B0B9FF]  to-[#E7E9FF] h-full w-1/2 rounded-2xl hover:bg-transparent hover:text-white transition-all duration-500">
              <IoIosMail className="w-10 h-10" />
            </div>
            <div className="cursor-pointer link-box flex items-center justify-center  bg-[#B0B9FF]  h-full w-1/2 rounded-2xl hover:bg-transparent hover:text-white transition-all duration-500">
              <FaDownload className="w-10 h-10" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card
        className="row-start-3 row-span-1 col-start-1 col-span-2 group-hover:!text-white transition-colors duration-500 relative"
        style={{
          gridArea: "box-5",
        }}
      >
        <Spotlight
          className="z-10 from-white/70 via-white/40 to-white/30 blur-2xl"
          size={124}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4/5">
          <InfiniteSliderHoverSpeed />
        </div>

        <CardHeader className="absolute left-4 top-1/2 z-20 -translate--1/2 !m-0 !p-0">
          <CardTitle className="font-bold text-3xl md:text-4xl lg:text-4xl text-gray-200 group-hover:!text-white transition-colors duration-500">
            <TextReveal>
              <div className="flex items-center justify-between">
                <span>STACKS</span>
              </div>
            </TextReveal>
          </CardTitle>
        </CardHeader>
        <ProgressiveBlur
          className="absolute top-0 left-0 h-full w-2/3  pointer-events-none"
          direction="left"
          blurIntensity={0.5}
        />
      </Card>
    </section>
  );
}

interface TimeParts {
  hours: number;
  minutes: number;
  seconds: number;
}

const winnipegFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Winnipeg",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function LiveClock() {
  const [{ hours, minutes, seconds }, setTime] = useState<TimeParts>(
    getWinnipegTime()
  );

  function getWinnipegTime(): TimeParts {
    const parts = winnipegFormatter.formatToParts(new Date());
    const hours = Number(parts.find((p) => p.type === "hour")?.value);
    const minutes = Number(parts.find((p) => p.type === "minute")?.value);
    const seconds = Number(parts.find((p) => p.type === "second")?.value);
    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getWinnipegTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-0.5 font-mono text-xl z-20">
      <SlidingNumber value={hours} padStart />
      <span className="text-white">:</span>
      <SlidingNumber value={minutes} padStart />
    </div>
  );
}

function InfiniteSliderHoverSpeed(): JSX.Element {
  const stacks: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [
    SiNextdotjs,
    FaReact,
    SiShadcnui,
    RiTailwindCssFill,
    BiLogoTypescript,
    SiDrizzle,
    BiLogoPostgresql,
  ];

  return (
    <InfiniteSlider speedOnHover={20} gap={24} speed={20}>
      {stacks.map((Icon, idx) => (
        <div
          key={idx}
          className="w-16 h-16 rounded-xl flex items-center justify-center bg-gray-100"
        >
          <Icon className="w-12 h-12 text-gray-800 transition-colors" />
        </div>
      ))}
    </InfiniteSlider>
  );
}

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border-l-8 border-l-gray-700 bg-gray-100 py-5 pl-16 pr-5 font-sans text-lg italic leading-relaxed text-gray-500 before:absolute before:left-3 before:top-3 before:font-serif before:text-6xl before:text-gray-700 before:content-['“']",
        className
      )}
    >
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p
      className={cn(
        "mt-5 pr-4 text-right font-bold not-italic text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
