"use client";
import React, { useEffect, useState } from "react";
import MovieDetails from "../MovieDetails";

interface HeroProps {
  moviePosters: Array<any>;
}

const Hero: React.FC<HeroProps> = ({ moviePosters }: any) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * moviePosters.results.length);

    const randomMovie = moviePosters.results[randomIndex];
    console.log("randomMovie", randomMovie);
    setMovie(randomMovie);
  }, [moviePosters]);

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default Hero;
