import Spline from "@splinetool/react-spline/next";
import { SiShadcnui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import PageTransitionLink from "@/components/PageTransitionLink";
import { SiDrizzle } from "react-icons/si";
import { TiLocationArrow } from "react-icons/ti";
import { BiLogoPostgresql } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Cursor } from "@/components/motion-primitives/cursor";
import { SpinningText } from "@/components/motion-primitives/spinning-text";
import { FaArrowDown } from "react-icons/fa6";
import CTAButton from "@/components/cta_button";
import TextReveal from "@/components/ui/textReveal";

export default function Home() {
  return (
    <div className="h-dvh relative overflow-hidden">
      {/* <Spline scene="https://prod.spline.design/vQXZLEF57yDJ5UDD/scene.splinecode" />

      <div className="absolute bottom-20 right-0 left-0 flex items-center justify-center">
        <div className="relative max-w-max ">
          <GlowEffect
            colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
            mode="colorShift"
            blur="soft"
            duration={3}
            scale={1}
          />
          <Link
            href={"/portfolio"}
            className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 text-zinc-50 px-4 py-2 text-base  outline outline-1 outline-[#fff2f21f]"
          >
            Get Started!
          </Link>
        </div>
      </div> */}
      <TextReveal delay={0.4}>
        <div className="absolute top-8 left-20 pointer-events-none">
          <h1 className="text-2xl tracking-[1rem]">ERIC.GNG</h1>
        </div>
      </TextReveal>
      <div className="absolute bottom-8 left-20 flex flex-col text-wrap max-w-[800px]  pointer-events-none">
        <TextReveal delay={0.5}>
          <div>
            <span className="text-7xl text-gray-100  leading-[5.9rem]">
              Crafting digital experiences that inspire
            </span>
          </div>
        </TextReveal>

        <div className="flex gap-4 mt-6">
          <div className="border border-gray-600 p-1 rounded-xl">
            <RiNextjsFill className="w-8 h-8" />
          </div>
          <div className="border border-gray-600 p-2 rounded-xl">
            <FaReact className="w-6 h-6" />
          </div>
          <div className="border border-gray-600 p-3 rounded-xl">
            <SiShadcnui className="w-4 h-4" />
          </div>
          <div className="border border-gray-600 p-2 rounded-xl">
            <SiDrizzle className="w-6 h-6" />
          </div>
          <div className="border border-gray-600 p-2 rounded-xl">
            <BiLogoPostgresql className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-8 border border-gray-500 rounded-full">
        <CTAButton
          id=""
          title="Contact me"
          rightIcon={<TiLocationArrow />}
          containerClass="flex items-center gap-2 !bg-transparent text-white"
        />
      </div>

      <div className="absolute right-10 bottom-16 border border-gray-500 rounded-full bg-violet-50 ">
        <PageTransitionLink
          href="/portfolio"
          className="flex items-center px-7"
        >
          <span
            className={cn(
              "text-4xl",
              "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-1 py-3 text-black"
            )}
          >
            <span className="relative inline-flex self-center overflow-hidden font-general text-xs uppercase">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 text-3xl leading-none tracking-[0.2rem]">
                Portfolio
              </div>
              <div className="absolute translate-y-[160%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-3xl leading-none tracking-[0.2rem]">
                Portfolio
              </div>
            </span>
          </span>
          <FaArrowDown className="ml-1 w-7 h-7 text-black" />
        </PageTransitionLink>
      </div>

      <div className="top-0 left-0 h-[110dvh]">
        <Spline scene="https://prod.spline.design/aR69XrqXC9FlD2Bf/scene.splinecode" />
      </div>
    </div>
  );
}
