import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import { baseURL } from "@/utils/constant";

const MovieDetails = ({ movie }: { movie: any }) => {
  console.log("Movie", movie);
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh] justify-center lg:pb-12">
          <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
            {movie && (
              <Image
                alt="movie"
                fill
                src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
