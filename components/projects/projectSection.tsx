"use client";
import Image from "next/image";
import OtherProject from "./OtherProject";
import ZeniProject from "./zeni";
import ZeniLandingProject from "./zeni-landing";

const ZentryDes = `This is the project where I cloned the landing page of Zentry.
I took on this challenge to sharpen my frontend skills by recreating a visually rich,
animated layout from scratch. The goal was to match the original experience as closely
as possible — from its smooth GSAP transitions to its responsive structure across screen
sizes. Built with React, Tailwind CSS, and Vite, the project pushed me to pay close attention
to spacing, motion, and interactivity. More than just a clone, it was a deep dive into translating
design into clean, performant code.`;

export default function Project() {
  return (
    <section className="w-full mt-28 mb-8 px-4 md:px-16 lg:px-36">
      <div>
        <h1 className="font-normal text-4xl md:text-6xl lg:text-7xl text-blue-50 flex flex-col gap-3 mb-8">
          Featured Work
        </h1>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:gap-14 gap-4 flex flex-col">
        <ZeniProject />
        <ZeniLandingProject />
      </div>

      <div>
        <h1 className="font-normal text-4xl md:text-6xl lg:text-7xl text-blue-50 flex flex-col gap-3 mt-24 mb-8">
          Other Work
        </h1>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:gap-14 gap-4 flex flex-col">
        <OtherProject
          title="Zentry—clone"
          titleSpinning="Zentry"
          isHosted={true}
          demoLink="https://zentry-clone-ericgng.vercel.app/"
          imgLink="/projects/zentry/hero.png"
          shortDes="Redefine Gaming"
          description={ZentryDes}
          hashTags={[
            "FrontendDevelopment",
            "ReactJS",
            "TailwindCSS",
            "Vite",
            "GSAP",
          ]}
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotating-svg"
            >
              {" "}
              <g clipPath="url(#clip0_238_1313)">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                  fill="url(#paint0_linear_238_1313)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_238_1313"
                  x1="14"
                  y1="26"
                  x2="179"
                  y2="179.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#E9B8FF" />{" "}
                  <stop offset="1" stopColor="#F9ECFF" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_238_1313">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          }
          setting={{
            webShowCase: true,
          }}
          customContent={""}
        />

        <OtherProject
          title="Suburbia Skate"
          titleSpinning="Skate"
          isHosted={false}
          demoLink=""
          imgLink="/projects/suburbia/hero.png"
          shortDes="Code along"
          description={ZentryDes}
          hashTags={[
            "3D Objects Integration",
            "Three.js",
            "Frontend Development",
            "Prismic - Headless page builder",
            "Next.js",
          ]}
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotating-svg"
            >
              {" "}
              <g clipPath="url(#clip0_238_1269)">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M75.5492 178.786L75.5488 178.787L62.9138 166.152C62.9709 166.927 63 167.71 63 168.5C63 185.897 48.897 200 31.5 200C14.103 200 0 185.897 0 168.5C0 151.103 14.103 137 31.5 137C32.2899 137 33.073 137.029 33.8483 137.086L20.8627 124.101L20.8654 124.098C7.95846 110.931 0 92.8947 0 73C0 32.6832 32.6832 0 73 0C92.8947 0 110.931 7.95845 124.098 20.8654L124.1 20.863L124.491 21.2532C124.576 21.3384 124.662 21.4239 124.747 21.5095L137.086 33.849C137.029 33.0735 137 32.2901 137 31.5C137 14.103 151.103 0 168.5 0C185.897 0 200 14.103 200 31.5C200 48.897 185.897 63 168.5 63C167.71 63 166.927 62.9709 166.151 62.9137L178.492 75.2547C178.577 75.3389 178.661 75.4234 178.745 75.508L178.786 75.5491L178.786 75.5492C191.898 88.7461 200 106.927 200 127C200 167.317 167.317 200 127 200C106.927 200 88.7461 191.898 75.5492 178.786Z"
                  fill="url(#paint0_linear_238_1269)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_238_1269"
                  x1="14"
                  y1="26"
                  x2="179"
                  y2="179.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#E9B8FF" />{" "}
                  <stop offset="1" stopColor="#F9ECFF" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_238_1269">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          }
          setting={{
            webShowCase: false,
          }}
          customContent={
            <div className="w-full flex items-center justify-center mt-20">
              <div className="lg:w-[650px] w-[80%] rounded-lg overflow-hidden">
                <Image
                  src={"/projects/suburbia/image.png"}
                  alt="whole page image"
                  width={1886}
                  height={8000}
                  className="size-full object-cover"
                />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
