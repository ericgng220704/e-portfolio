"use client";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import CTAButton from "./cta_button";
import { Button } from "./ui/button";
import Link from "next/link";
import PageTransitionLink from "./PageTransitionLink";

const navItems = ["About", "Projects"];

export default function NavBar() {
  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between md:px-16 lg:px-40">
          {/* Logo and Product button */}
          <div className="flex size-full items-center justify-between bg-gray-50 text-black px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-4">
              <PageTransitionLink href="/" className="">
                <img src="logo.jpg" alt="logo" className="w-10 rounded-full" />
              </PageTransitionLink>

              <h3>Hi!</h3>
            </div>

            {/* Navigation Links and Audio Button */}
            <div className="flex h-full items-center ">
              <div className="hidden md:block mr-5">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn text-black"
                  >
                    <Button
                      variant="link"
                      effect="hoverUnderline"
                      className="font-medium text-gray-700"
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </div>

              <CTAButton
                id="product-button"
                title="Contact me"
                rightIcon={<TiLocationArrow />}
                containerClass="!bg-black/85 text-white md:flex hidden items-center justify-center gap-1 border border-1"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
