"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollMediaProps {
  scroller: HTMLDivElement | null;
  videoUrl: string;
  imageUrl: string;
  imageHeight?: number;
}

export function WebShowCase({
  scroller,
  videoUrl,
  imageUrl,
  imageHeight = 1000,
}: ScrollMediaProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  console.log(imageHeight);

  useLayoutEffect(() => {
    if (!scroller) return;

    const ctx = gsap.context(() => {
      // ––– Video Pin + Reveal –––
      if (videoRef.current) {
        gsap.set(videoRef.current, {
          clipPath: "inset(10% 0 1% 1% round 0%)",
          scale: 0.4,
        });

        gsap.to(videoRef.current, {
          clipPath: "inset(10% 0 1% 1% round 5%)",
          scale: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            scroller: scroller,
            start: "top-=300px top",
            end: `+=${window.innerHeight + imageHeight}`,
            scrub: true,
            pin: true,
            markers: true,
          },
        });
      }

      // ––– Image Slide‑In –––
      if (imgRef.current) {
        gsap.set(imgRef.current, { xPercent: 100, opacity: 0 });
        gsap.to(imgRef.current, {
          xPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imgRef.current,
            scroller: scroller,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });
      }
    }, scroller);

    return () => ctx.revert();
  }, [scroller]);

  return (
    <div className="grid grid-cols-5 overflow-hidden gap-12 mt-28">
      <div
        ref={videoRef}
        className="col-span-3 vid-container w-full overflow-hidden rounded-xl"
      >
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        ref={imgRef}
        className="col-span-2 img-container w-full overflow-hidden rounded-xl"
      >
        <img
          src={imageUrl}
          alt="Scroll‑animated"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
