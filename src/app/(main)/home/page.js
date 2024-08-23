"use client";

import Image from "next/image";
import About from "../about/about";
import Myskills from "../myskills/Myskills";
import Projects from "../projects/page";
import Contact from "../contact/page";
export default function HomePage() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-black to-purple-500 via-black via-[40%]">
        <div className="relative top-5"></div>
        <div className="grid grid-cols-2 gap-2"> 
          <div className="ml-[180px] mt-32">
            <h1 className=" text-2xl mb-4 text-gray-400">
              FULL-STACK WEB DEVELOPER
            </h1>
            <p className="text-white text-8xl font-bold mb-1 font-serif">
              Naphtali
            </p>
            <p className="text-white text-8xl font-bold font-serif">Morage</p>
            <div className="mt-14 border-l-2 border-gray-500 font-sans text-gray-400">
              <div className="ml-8">
                Im a full-stack web
                <br /> developer and i work <br />
                remotely from kenya
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Image
              src="/naphtali.JPG"
              width={200}
              height={200}
              priority
              alt=""
              className="rounded-full w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
      <About />
      <Myskills/>
      <Projects />
      <Contact/>
    </div>
  );
}
