"use client";

import NextMovieCard from "@/app/components/NextjsMovieCard";
import IMEIgeneratorCard from "../../components/IMEIgeneratorCard";
import MovieappCard from "../../components/Movieapp";
import { Button } from "@material-tailwind/react";

export default function Projects() {
  return (
    <div className="h-[800px] bg-gradient-to-r from-black to-purple-500 via-black via-[30%]">
      <h1 className=" text-8xl font-serif font-bold text-center relative top-16 text-white">
        My Projects
      </h1>
      <div className="flex gap-14 ml-20 mt-36">
        <IMEIgeneratorCard />
        <NextMovieCard />
        <MovieappCard />
      </div>

      <Button
        onClick={() =>
          (window.location.href =
            "https://github.com/naphtalimorage?tab=repositories")
        }
        variant="text"
        className="mt-11 ml-20  flex text-white items-center gap-2 bg-purple-400 hover:bg-purple-600"
      >
        More projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </div>
  );
}
