"use client";
import ZeniProject from "./zeni";

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
        <ZeniProject />
      </div>
    </section>
  );
}
