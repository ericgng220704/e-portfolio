"use client";

import { useState, useLayoutEffect, useEffect } from "react";
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
import { InViewImagesGrid } from "./InViewImageGrids";
import ProjectFooter from "./footer";
import { SpinningText } from "../motion-primitives/spinning-text";

export default function ZeniProject() {
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

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
    if (!open || !scroller) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const triggerEl = scroller.querySelector<HTMLElement>(".sticky-cards");
    if (!triggerEl) {
      console.warn("❌ .sticky-cards not found");
      return;
    }

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".card"));
    const images = Array.from(
      scroller.querySelectorAll<HTMLImageElement>(".card img")
    );
    const total = cards.length;
    if (total < 2) return;

    // Initial states
    cards.forEach((card, i) =>
      gsap.set(card, {
        y: i === 0 ? "0%" : "115%",
        scale: 1,
        rotation: 0,
      })
    );
    images.forEach((img) => gsap.set(img, { scale: 1 }));

    // Build timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller,
        trigger: triggerEl,
        start: "top top",
        end: `+=${window.innerHeight * (total - 1)}`,
        pin: true,
        scrub: 0.5,
      },
    });

    for (let i = 0; i < total - 1; i++) {
      tl.to(
        cards[i],
        { scale: 0.5, rotation: 10, duration: 1, ease: "none" },
        i
      )
        .to(images[i], { scale: 1.5, duration: 1, ease: "none" }, i)
        .to(cards[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
    }

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [open, scroller]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Tilt rotationFactor={2} isRevese className="w-full cursor-pointer">
          <div className="h-[340px] relative group flex flex-col overflow-hidden border border-zinc-950/10 rounded-xl">
            <div className="h-[270px] overflow-hidden">
              <img
                src="/projects/zeni/thumbnail_logo.png"
                alt="Zeni thumbnail"
                className="w-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 z-50 h-[70px] absolute bottom-0 left-0 p-2 flex flex-col items-center justify-center w-full">
              <p className="text-zinc-400">
                Your money, your journey, your Zeni
              </p>
              <h1 className="flex items-center gap-2 font-mono text-xl leading-snug text-zinc-50">
                <TbTargetArrow />
                <span>Zeni</span>
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
                      project
                    </span>
                  </div>
                </TextReveal>
              </div>

              <div className="mt-4 flex items-center gap-1 border border-gray-400 px-3 w-fit py-1 rounded-2xl">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm text-gray-300">Ongoing</span>
              </div>
            </div>

            <CTAButton
              id="live demo"
              title="Live demo"
              containerClass="flex items-center gap-2"
              rightIcon={<FaLocationArrow className="w-4 h-4" />}
            />
          </DrawerTitle>

          <DrawerHeader className="grid grid-cols-2 gap-14 mt-8 relative">
            <div className="absolute right-8 -bottom-12">
              <div
                className="relative inline-block"
                style={{
                  width: "8rem",
                  height: "8rem",
                }}
              >
                <SpinningText
                  radius={3}
                  className="font-medium leading-none absolute top-1/2 left-1/2 text-gray-300"
                >
                  {`Zeni • Zeni • Zeni • `}
                </SpinningText>

                {/* center circle */}
                <div
                  className="absolute top-1/2 left-1/2 bg-gray-300 rounded-full"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-gray-400">Why I built Zeni</p>
              <TextReveal animateOnScroll={false} delay={0.35}>
                <p className="mt-1 text-gray-100">
                  I’ve always believed managing money shouldn’t feel like a
                  chore. I created Zeni because I wanted a finance tool that
                  actually feels good to use — beautiful, fast, and helpful.
                  Zeni reimagines money management for this generation— clean
                  design meets real functionality, powered by AI.
                </p>
              </TextReveal>

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
            </div>

            <div className="pr-16">
              <p className="text-gray-400">Description</p>
              <TextReveal animateOnScroll={false} delay={0.35}>
                <div className="mt-1 flex flex-col gap-2 text-white text-lg">
                  <p>
                    <span className="italic text-xl">Zeni</span> is a modern
                    expense management app built to make budgeting smarter, not
                    harder. Designed with a clean, intuitive UI and vibrant
                    visualizations, it empowers users to track incomes,
                    expenses, and budgets effortlessly—whether personal or
                    shared.
                  </p>
                  <p>
                    Its built‑in AI agent does more than answer questions; it
                    actively assists in workflows, transforming financial
                    tracking into an intelligent experience.
                  </p>
                  <p>
                    Every part of Zeni—thoughtful UX to AI integration—is
                    crafted to help people feel in control of their money,
                    without the overwhelm.
                  </p>
                </div>
              </TextReveal>
            </div>
          </DrawerHeader>

          <div className="sticky-cards flex justify-center items-center w-full h-dvh -mt-28">
            <div className="cards-container relative w-[50%] h-[50%] overflow-hidden rounded-xl">
              {[
                "thumbnail_logo",
                "dashboard",
                "balance_detail_1",
                "balance_detail_2",
                "balance_detail_3",
                "transactions",
              ].map((name) => (
                <div
                  key={name}
                  className="card absolute size-full overflow-hidden rounded-xl"
                >
                  <div className="tag absolute top-2 left-3 z-10 rounded-full bg-black/80 px-3 py-1">
                    <p className="text-xs text-gray-200">{name}.png</p>
                  </div>
                  <img
                    src={`/projects/zeni/${name}.png`}
                    alt={name}
                    className="relative size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="ml-2 -mt-36 flex items-center justify-center">
            <span className="text-xs text-gray-400">
              Oops, these images look a bit off—I'll fix them soon, hehe!
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mx-8 mt-28">
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
                <div className="text-5xl flex items-end">
                  <span>Chatbot interactions</span>
                </div>
              </TextReveal>
            </div>
            <div>
              <InViewImagesGrid
                images={[
                  {
                    src: "/projects/zeni/chat_bot_1.png",
                    text: "Create new balance",
                  },
                  {
                    src: "/projects/zeni/chat_bot_2.png",
                    text: "Update a balance",
                  },
                  {
                    src: "/projects/zeni/chat_bot_3.png",
                    text: "Delete a balance",
                  },
                  {
                    src: "/projects/zeni/chat_bot_4.png",
                    text: "Show category totals",
                  },
                  {
                    src: "/projects/zeni/chat_bot_5.png",
                    text: "Show set recurring transactions",
                  },
                  {
                    src: "/projects/zeni/chat_bot_6.png",
                    text: "Show transactions",
                  },
                ]}
              />
            </div>
          </div>

          <ProjectFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
