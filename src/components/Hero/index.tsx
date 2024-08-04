"use client";
import React, { useEffect, useState } from "react";
import MovieDetails from "../MovieDetails";

interface HeroProps {
  moviePosters: Array<any>;
}

const Hero: React.FC<HeroProps> = ({ moviePosters }: any) => {
  const [movie, setMovie] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    const randomMovie =
      moviePosters.results[
        Math.floor(Math.random() * moviePosters.results.length)
      ];

    //fetch tailerurl

    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${randomMovie.id}?api_key=${process.env.NEXT_PUBLIC_API_Key}&append_to_response=videos`
    )
      .then((res: any) => res.json())
      .then((data: any) => {
        const trailerIndex = data.videos.results.findIndex(
          (video: any) => video.type === "Trailer"
        );

        const trailerURL = `https://www.youtube.com/watch?v=${data.videos.results[trailerIndex]?.key}`;
        setTrailer(trailerURL);
      });

    setMovie(randomMovie);
  }, [moviePosters]);

  return (
    <div>
      <MovieDetails
        movie={movie}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        trailerURL={trailer}
      />
    </div>
  );
};

export default Hero;
