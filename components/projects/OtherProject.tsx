"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { TbTargetArrow } from "react-icons/tb";
import { FaChartBar, FaLocationArrow } from "react-icons/fa";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
} from "../ui/drawer";
import { Tilt } from "../ui/tilt";
import TextReveal from "../ui/textReveal";
import { InViewImagesGrid } from "./InViewImageGrids";
import ProjectFooter from "./footer";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import CTAButton from "../cta_button";
import { SpinningText } from "../motion-primitives/spinning-text";
import { cn } from "@/lib/utils";
import { WebShowCase } from "./WebShowCase";

export default function OtherProject({
  title,
  titleSpinning,
  isHosted,
  imgLink,
  shortDes,
  description,
  hashTags,
  customContent,
  setting,
  icon,
  demoLink,
}: {
  title: string;
  titleSpinning: string;
  isHosted: boolean;
  imgLink: string;
  shortDes: string;
  description: string;
  hashTags: string[];
  customContent: any;
  setting: {
    webShowCase: boolean;
    imageHeight?: number;
  };
  icon: any;
  demoLink: string;
}) {
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Tilt rotationFactor={2} isRevese className="w-full cursor-pointer">
          <div className="relative group flex flex-col overflow-hidden border border-zinc-950/10 rounded-xl">
            <div className="overflow-hidden">
              <img
                src={imgLink}
                alt="Zeni thumbnail"
                className="w-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 z-50 p-2 flex flex-col items-center justify-center w-full">
              <p className="text-zinc-400 md:text-base text-sm">{shortDes}</p>
              <h1 className="flex items-center gap-2 font-mono text-lg md:text-xl leading-snug text-zinc-50">
                <TbTargetArrow />
                <span>{title}</span>
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
          <DrawerTitle className="flex md:items-center gap-4 justify-between md:flex-row flex-col mx-8">
            <div>
              <div className="flex items-center gap-2">
                {icon}
                <TextReveal animateOnScroll={false} delay={0}>
                  <div className="text-5xl md:text-6xl flex items-end">
                    <span>{title}</span>
                    <span className="ml-2 text-lg text-gray-400 font-normal tracking-[0.05rem]">
                      project
                    </span>
                  </div>
                </TextReveal>
              </div>

              <div className="mt-4 flex items-center gap-1 border border-gray-400 px-3 w-fit py-1 rounded-2xl">
                <span
                  className={cn(
                    "w-2 h-2  rounded-full",
                    isHosted ? "bg-green-400" : "bg-yellow-400"
                  )}
                ></span>
                <span className="text-sm text-gray-300">Other work</span>
              </div>
            </div>

            {isHosted && (
              <CTAButton
                id="live demo"
                title="Live demo"
                href={demoLink}
                containerClass="flex items-center gap-2"
                rightIcon={<FaLocationArrow className="w-4 h-4" />}
              />
            )}
          </DrawerTitle>

          <DrawerHeader className="flex flex-col lg:grid lg:grid-cols-2 gap-14 mt-8 relative text-left">
            <div className="absolute right-8 -bottom-28">
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
                  {`${titleSpinning} • ${titleSpinning} • ${titleSpinning} • `}
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
              <p className="text-gray-400">Description</p>
              <TextReveal animateOnScroll={false} delay={0.35}>
                <p className="mt-1 text-gray-100">{description}</p>
              </TextReveal>
            </div>

            <div className="lg:pl-[30%] ml-4 lg:ml-0">
              <p className="text-gray-400 mb-2 self-center">Tags</p>
              <TextReveal animateOnScroll={false} delay={0.35}>
                <div className="mt-1 flex flex-row flex-wrap lg:flex-col gap-2 text-white text-lg">
                  {hashTags.map((tag, i) => (
                    <p
                      key={i + tag}
                      className="py-2 px-5 border border-white w-max rounded-full"
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
              </TextReveal>
            </div>
          </DrawerHeader>

          {setting.webShowCase && open && (
            <WebShowCase
              scroller={scroller}
              imageUrl="/projects/zentry/image.png"
              videoUrl="/projects/zentry/demo.mp4"
              imageHeight={setting.imageHeight}
            />
          )}

          {customContent}

          <ProjectFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
