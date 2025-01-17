"use client";
import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Thumbnail from "../Thumbnail";

const Row = ({ title, movies }: any) => {
  const rowRef = useRef(null);
  const handleScroll = (direction: any) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current as HTMLElement;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      (rowRef.current as HTMLElement).scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="w-56 mt-6 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h2>

      <div className="group relative md:ml-2">
        <BiChevronLeft
          onClick={() => handleScroll("left")}
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 transition cursor-pointer hover:scale-125 group-hover:opacity-100"
        />

        <div
          className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {movies.map((movie: any) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <BiChevronRight
          onClick={() => handleScroll("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 opacity-0 transition cursor-pointer hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
