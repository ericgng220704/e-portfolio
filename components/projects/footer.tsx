import { FiArrowUpRight } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

export default function ProjectFooter() {
  return (
    <div className="mt-28 mx-4 flex flex-col gap-6">
      <div className="w-full lg:grid lg:grid-cols-5 flex flex-col">
        <div className="col-span-3 flex flex-col gap-1 ml-5">
          <span className="text-2xl md:text-3xl text-gray-400">
            Crafting digital experiences that inspire,
          </span>
          <p className="text-white text-3xl md:text-4xl font-medium">
            Let work together!
          </p>
          <div className="w-full h-16"></div>
        </div>
        <div className="flex justify-between col-span-2 [@media(min-width:500px)]:grid [@media(min-width:500px)]:grid-cols-2  gap-12 text-gray-400 lg:ml-0 ml-5">
          <div className="flex flex-col self-end gap-1">
            <a
              className="flex items-center gap-1 hover:text-white transition-all duration-300"
              href=""
            >
              <IoIosMail />
              <span>giahaonguyen2207@gmail.com</span>
            </a>
            <a
              className="flex items-center gap-1 hover:text-white transition-all duration-300"
              href=""
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
          <div className="flex flex-col self-end gap-1">
            <a
              className="flex items-center gap-1 hover:text-white transition-all duration-300"
              href=""
            >
              <FiArrowUpRight />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-1 hover:text-white transition-all duration-300"
              href=""
            >
              <FiArrowUpRight />
              <span>Github</span>
            </a>
            <a
              className="flex items-center gap-1 hover:text-white transition-all duration-300"
              href=""
            >
              <FiArrowUpRight />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 400"
          className="w-full h-auto"
        >
          <text
            x="50%"
            y="50%"
            fill="rgba(229,231,235,1)"
            fontFamily="sans-serif"
            fontSize="350"
            fontWeight="800"
            letterSpacing="20"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            ERIC.GNG
          </text>
        </svg>
      </div>
    </div>
  );
}
