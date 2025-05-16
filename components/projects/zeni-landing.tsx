"use client";

import { useState, useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TbTargetArrow } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import { FaChartBar, FaLocationArrow } from "react-icons/fa";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";
import { Tilt } from "../ui/tilt";
import TextReveal from "../ui/textReveal";
import CTAButton from "../cta_button";
import ProjectFooter from "./footer";
import { SpinningText } from "../motion-primitives/spinning-text";
import Image from "next/image";

export default function ZeniLandingProject() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const vidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !scroller) return;

    const svgNodeList =
      scroller.querySelectorAll<SVGSVGElement>("svg.rotating-svg");
    const svgs = Array.from(svgNodeList);

    svgs.forEach((svg) => {
      // continuous spin
      const tween = gsap.to(svg, {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 10,
        transformOrigin: "50% 50%",
      });

      const onEnter = () => tween.timeScale(2.5);
      const onLeave = () => tween.timeScale(1);

      svg.addEventListener("mouseenter", onEnter);
      svg.addEventListener("mouseleave", onLeave);

      // stash handlers for cleanup
      (svg as any)._onEnter = onEnter;
      (svg as any)._onLeave = onLeave;
      (svg as any)._tween = tween;
    });

    return () => {
      svgs.forEach((svg) => {
        const { _onEnter, _onLeave, _tween } = svg as any;
        svg.removeEventListener("mouseenter", _onEnter);
        svg.removeEventListener("mouseleave", _onLeave);
        _tween.kill();
      });
    };
  }, [open, scroller]);

  useLayoutEffect(() => {
    if (!open || !scroller || !vidRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(vidRef.current, {
        clipPath: "inset(10% 0 1% 1% round 0%)",
        scale: 0.4,
      });

      gsap.to(vidRef.current, {
        clipPath: "inset(10% 0 1% 1% round 5%)",
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: vidRef.current,
          scroller: scroller,
          start: "top-=300px top",
          end: `+=${window.innerHeight + 700}`,
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      ScrollTrigger.refresh();
    }, scroller);

    return () => ctx.revert();
  }, [open, scroller]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Tilt rotationFactor={2} isRevese className="w-full cursor-pointer">
          <div
            className="h-[350px] relative flex flex-col overflow-hidden border rounded-xl border-zinc-950/10 bg-card-gray dark:border-zinc-50/10 dark:bg-zinc-900"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
          >
            <div className="h-[270px] overflow-hidden">
              {mouseEnter ? (
                <video
                  muted
                  autoPlay
                  loop
                  src={"/projects/zeni_landing_page/demo.mp4"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/projects/zeni_landing_page/hero.png"
                  alt="Zeni thumbnail"
                  className="w-full object-cover"
                />
              )}
            </div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 z-50 h-[70px] absolute bottom-0 left-0 p-2 flex flex-col items-center justify-center w-full">
              <p className="text-zinc-400">
                Your money, your journey, your Zeni
              </p>
              <h1 className="flex items-center gap-2 font-mono text-xl leading-snug text-zinc-50">
                <TbTargetArrow />
                <span>Zeni—Landing page</span>
              </h1>
            </div>
          </div>
        </Tilt>
      </DrawerTrigger>

      <DrawerContent className="max-h-[88dvh]">
        <div
          className="h-[85dvh] overflow-y-auto bg-card-gray"
          ref={setScroller}
        >
          <DrawerTitle className="flex items-center justify-between mx-8">
            <div>
              <div className="flex items-center gap-2">
                <svg
                  className="rotating-svg"
                  width="40"
                  height="40"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clipPath="url(#clip0_231_648)">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M100 33.6449C92.7738 33.6449 86.9159 39.5028 86.9159 46.729H53.271C53.271 20.9213 74.1923 0 100 0C125.808 0 146.729 20.9213 146.729 46.729C146.729 72.5367 125.808 93.4579 100 93.4579V59.8131C107.226 59.8131 113.084 53.9551 113.084 46.729C113.084 39.5028 107.226 33.6449 100 33.6449ZM166.355 100C166.355 92.7738 160.497 86.9159 153.271 86.9159L153.271 53.271C179.079 53.271 200 74.1923 200 100C200 125.808 179.079 146.729 153.271 146.729C127.463 146.729 106.542 125.808 106.542 100H140.187C140.187 107.226 146.045 113.084 153.271 113.084C160.497 113.084 166.355 107.226 166.355 100ZM46.729 113.084C39.5028 113.084 33.6449 107.226 33.6449 100C33.6449 92.7738 39.5028 86.9159 46.729 86.9159C53.9551 86.9159 59.8131 92.7738 59.8131 100H93.4579C93.4579 74.1923 72.5367 53.271 46.729 53.271C20.9213 53.271 0 74.1923 0 100C0 125.808 20.9213 146.729 46.729 146.729V113.084ZM100 166.355C107.226 166.355 113.084 160.497 113.084 153.271H146.729C146.729 179.079 125.808 200 100 200C74.1923 200 53.271 179.079 53.271 153.271C53.271 127.463 74.1923 106.542 100 106.542L100 140.187C92.7738 140.187 86.9159 146.045 86.9159 153.271C86.9159 160.497 92.7738 166.355 100 166.355Z"
                      fill="url(#paint0_linear_231_648)"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_231_648"
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stopColor="#B8DBFC" />{" "}
                      <stop offset="1" stopColor="#F8FBFE" />{" "}
                    </linearGradient>{" "}
                    <clipPath id="clip0_231_648">
                      {" "}
                      <rect width="200" height="200" fill="white" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
                <TextReveal animateOnScroll={false} delay={0}>
                  <div className="text-6xl flex items-end">
                    <span>Zeni</span>
                    <span className="ml-2 text-lg text-gray-400 font-normal tracking-[0.05rem]">
                      landing page
                    </span>
                  </div>
                </TextReveal>
              </div>

              <div className="mt-4 flex items-center gap-1 border border-gray-400 px-3 w-fit py-1 rounded-2xl">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm text-gray-300">Finished</span>
                <span className="text-xs text-gray-600">for now...</span>
              </div>
            </div>

            <CTAButton
              id="live demo"
              title="Live demo"
              containerClass="flex items-center gap-2"
              rightIcon={<FaLocationArrow className="w-4 h-4" />}
            />
          </DrawerTitle>

          <DrawerHeader className="grid grid-cols-5 gap-14 mt-8 relative">
            <div className="col-span-3 ml-4">
              <p className="text-gray-400">Why I built the landing page?</p>
              <TextReveal animateOnScroll={false} delay={0.35}>
                <p className="mt-1 text-gray-100">
                  A great app deserves a great introduction. I created the Zeni
                  landing page to capture that first moment — the spark. With
                  GSAP-driven animations, smooth transitions, and a responsive
                  layout, the page brings Zeni’s identity to life before users
                  ever sign in. I wanted it to feel alive, thoughtful, and
                  inviting — because finance tools should feel as good as they
                  are functional.
                </p>
              </TextReveal>

              <div className="pr-16 mt-16">
                <p className="text-gray-400">Description</p>
                <TextReveal animateOnScroll={false} delay={0.35}>
                  <div className="mt-1 flex flex-col gap-2 text-white text-lg">
                    <p>
                      <span className="italic text-xl">
                        The Zeni landing page{" "}
                      </span>{" "}
                      is a dynamic, responsive showcase built to reflect the
                      app’s core values: clarity, control, and creativity. Using
                      GSAP and modern frontend tools, it introduces users to
                      Zeni through fluid motion and bold design.
                    </p>
                    <p>
                      Every interaction is purposeful — guiding users through
                      Zeni’s features with ease and elegance. It’s more than a
                      marketing page; it’s a polished, animated handshake that
                      sets the tone for what’s ahead.
                    </p>
                  </div>
                </TextReveal>
              </div>

              <div className="mt-20">
                <p className="text-gray-400">Tech Stack</p>
                <div className="mt-1 ml-3 flex flex-col gap-1 text-gray-300">
                  <span className="flex items-center gap-1">
                    <RiNextjsFill className="h-5 w-5" /> Next.js 15 (App Router)
                  </span>
                  <span className="flex items-center gap-1">
                    <BiLogoTypescript className="h-5 w-5" /> TypeScript
                  </span>
                  <span className="flex items-center gap-1">
                    <RiTailwindCssFill className="h-5 w-5" /> Tailwind CSS
                  </span>
                  <span className="flex items-center gap-1">
                    <SiShadcnui className="h-5 w-5" /> Shadcn/UI
                  </span>
                  <span className="flex items-center gap-1">
                    <FaChartBar className="h-5 w-5" /> Chart.js
                  </span>
                </div>
              </div>

              <div className="w-full relative h-[80dvh]">
                <div
                  ref={vidRef}
                  className="vid-container w-full absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <video
                    src={"/projects/zeni_landing_page/demo.mp4"}
                    muted
                    autoPlay
                    loop
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="w-full flex items-center justify-center">
                <div className="w-[650px] rounded-lg overflow-hidden">
                  <Image
                    src={"/projects/zeni_landing_page/image.png"}
                    alt="whole page image"
                    width={1887}
                    height={8608}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </DrawerHeader>

          <ProjectFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
