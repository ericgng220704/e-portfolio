"use client";
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
    <section className="w-full mt-28 mb-8 md:px-16 lg:px-36">
      <div>
        <h1 className="font-normal text-4xl md:text-6xl lg:text-7xl text-blue-50 flex flex-col gap-3 mb-8">
          Featured Work
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-14">
        <ZeniProject />
        <ZeniLandingProject />
      </div>

      <div>
        <h1 className="font-normal text-4xl md:text-6xl lg:text-7xl text-blue-50 flex flex-col gap-3 mt-24 mb-8">
          Other Work
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-14">
        <OtherProject
          title="Zentry—clone"
          titleSpinning="Zentry"
          isHosted={true}
          imgLink="/projects/zentry/hero.png"
          shortDes="Redefine Gaming"
          description={ZentryDes}
          hashTags={[
            "FrontendDevelopment",
            "ReactJS",
            "TailwindCSS",
            "GSAP",
            "ResponsiveDesign",
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
      </div>
    </section>
  );
}
