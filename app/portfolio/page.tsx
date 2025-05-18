"use client";

import GetInTouch from "@/components/GetTouch";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import ProjectFooter from "@/components/projects/footer";
import Project from "@/components/projects/projectSection";

export default function Portfolio() {
  return (
    <main className="bg-black min-h-screen pt-24 pb-20 relative [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:50px_50px]">
      <NavBar />
      <Hero />
      <Project />
      <GetInTouch />
      <ProjectFooter />
    </main>
  );
}
