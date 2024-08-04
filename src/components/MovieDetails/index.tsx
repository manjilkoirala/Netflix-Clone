import React, { useState } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import { baseURL } from "@/utils/constant";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const MovieDetails = ({
  movie,
  showPlayer,
  setShowPlayer,
  trailerURL,
}: {
  movie: any;
  showPlayer: boolean;
  setShowPlayer: any;
  trailerURL: any;
}) => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-screen justify-center lg:pb-12">
          <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
            {movie && (
              <Image
                alt="movie"
                fill
                src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}`}
                objectFit="cover"
              />
            )}
          </div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
            {movie?.overview}
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowPlayer(true)}
              className="bannerButton bg-white text-black"
            >
              <FaPlay className=" w-4 h-4 md:h-7 md:w-7" /> Play
            </button>
            <button className="bannerButton bg-[gray]/70">
              <IoIosInformationCircle
                className="h5
             w-5 md:h-8 md:w-8"
              />
              More Info
            </button>
          </div>
        </div>

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-100 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className=" font-semibold">Playing Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className="w-4 h-4" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailerURL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
