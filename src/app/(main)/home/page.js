"use client";

import Image from "next/image";
import About from "../about/about";
import Myskills from "../myskills/Myskills";
import Projects from "../projects/page";
import Contact from "../contact/page";

export default function HomePage() {
  return (
    <div>
      <div className="h-fit bg-gradient-to-r from-black to-purple-500 via-black via-[40%]">
        <div className="relative top-5"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-24">
          <div className="text-center lg:text-left lg:ml-[18px] mt-10 lg:mt-32">
            <h1 className="text-xl lg:text-2xl mb-4 text-gray-400">
              FULL-STACK WEB DEVELOPER
            </h1>
            <p className="text-white text-5xl lg:text-8xl font-bold mb-1 font-serif">
              Naphtali
            </p>
            <p className="text-white text-5xl lg:text-8xl font-bold font-serif">
              Morage
            </p>
            <div className="mt-10 lg:mt-14 border-l-2 border-gray-500 font-sans text-gray-400">
              <div className="ml-4 lg:ml-8">
                Im a full-stack web
                <br /> developer and I work <br />
                remotely from Kenya.
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-20 flex justify-center">
            <Image
              src="/naphtali.JPG"
              width={200}
              height={200}
              priority
              alt="Naphtali Morage"
              className="rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mb-10"
            />
          </div>
        </div>
      </div>
      
      <About />
      <Myskills />
      <Projects />
      <Contact />
    </div>
  );
}
