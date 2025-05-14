"use client";

import GetInTouch from "@/components/GetTouch";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Project from "@/components/projects/projectSection";

export default function Portfolio() {
  return (
    <main className="bg-black min-h-screen pt-24 pb-20">
      <NavBar />
      <Hero />
      <Project />
      <GetInTouch />
    </main>
  );
}
