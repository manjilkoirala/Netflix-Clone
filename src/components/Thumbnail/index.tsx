"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";

const Thumbnail = ({ movie }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/${movie.id}`}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="rounded-sm object-cover md:rounded"
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        objectFit="cover"
        alt="Movie"
        fill
      />
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-200 ease-out flex flex-col justify-center items-center gap-2 w-full bg-gradient-to-t from-black to-transparent bg-opacity-70 h-full">
          <h1 className="text-lg font-bold md:text-4xl lg:text-xl px-1 py-1 ">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        </div>
      )}
    </Link>
  );
};

export default Thumbnail;
