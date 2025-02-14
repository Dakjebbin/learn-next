"use client";

import { assets } from "@/public/asset";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  original_language: string;
};

type MoviesProps = {
  movies: Movie;
};

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="text-white">
      <div>
        <div className="p-5 rounded-2xl shadow-inner shadow-[#acacac]">
          {movies.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
              width={500}
              height={750}
              alt="poster image"
            />
          ) : (
            <Image src={assets.no_poster} alt="noPoster" />
          )}

          <div>
            <h3 className="mt-4 font-semibold">{movies.title}</h3>
            <span className="flex">
              <Image
                src={assets.star}
                alt="icon"
                className="text-[#dfdf1f] mr-2"
              />
              <p className="mr-2">{movies.vote_average.toFixed(1)} </p>
              <p>•</p>
              <p className="ml-2 text-[#a8a6a6]">{movies.original_language}</p>

              <p className="ml-2">•</p>
              <p className="ml-2 text-[#a8a6a6]">
                {movies.release_date.split("-")[0]}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
