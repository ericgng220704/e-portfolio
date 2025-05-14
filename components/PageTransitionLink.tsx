"use client";

import { LinkProps } from "next/link";
import { ReactNode } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { cn } from "@/lib/utils";

interface PageTransitionLinkProp extends LinkProps {
  children: ReactNode;
  className: string;
  href: string;
}

export default function PageTransitionLink({
  children,
  href,
  className,
}: PageTransitionLinkProp) {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-100%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87,0,0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87,0,0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
      className={cn(className)}
    >
      {children}
    </button>
  );
}
