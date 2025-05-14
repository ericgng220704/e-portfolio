import { FiArrowUpRight } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { SpinningText } from "../motion-primitives/spinning-text";

export default function ProjectFooter() {
  return (
    <div className="mt-28 mx-4 flex flex-col gap-6">
      <div className="w-full grid grid-cols-5">
        <div className="col-span-3 flex flex-col gap-1 ml-5">
          <span className="text-3xl text-gray-400">
            Crafting digital experiences that inspire,
          </span>
          <p className="text-white text-4xl font-medium">Let work together!</p>
          <div className="w-full h-16"></div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-12 text-gray-400">
          <div className=" flex flex-col self-end gap-1">
            <a className="flex items-center gap-1" href="">
              <IoIosMail />
              <span>giahaonguyen2207@gmail.com</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
          <div className="flex flex-col self-end gap-1">
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>LinkedIn</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>Github</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between pr-8 overflow-hidden">
        <div>
          <h1 className="text-[16.5rem] font-extrabold leading-none tracking-[0.5rem] text-gray-300">
            ERIC.GNG
          </h1>
        </div>
        <div className="self-start">
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
      </div>
    </div>
  );
}
