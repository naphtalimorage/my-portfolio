"use client";

import NextMovieCard from "@/app/components/NextjsMovieCard";
import IMEIgeneratorCard from "../../components/IMEIgeneratorCard";
import MovieappCard from "../../components/Movieapp";
import { Button } from "@material-tailwind/react";

export default function Projects() {
  return (
    <div className="min-h-fit bg-gradient-to-r from-black to-purple-500 via-black via-[30%] ">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-center relative top-16 text-white">
        My Projects
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row text-center justify-center items-center min-h-screen px-4 gap-4 md:gap-6 lg:gap-14 mt-20 lg:mt-24">
        <IMEIgeneratorCard />
        <NextMovieCard />
        <MovieappCard />
       
      </div>
      <div className="flex items-center justify-center lg:justify-start lg:px-24 mt-6 lg:mt-2 ">
      <Button
        onClick={() =>
          (window.location.href =
            "https://github.com/naphtalimorage?tab=repositories")
        }
        variant="text"
        className=" flex text-white gap-2 bg-purple-400 hover:bg-purple-600 "
      >
        More projects
       
      </Button>
      </div>
    </div>
  );
}
