"use client";
import MovieDetails from "@/components/MovieDetails";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const MovieDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_Key}&language=en-US&append_to_response=videos`
        ).then((response) => response.json());
        setMovie(response);
        const trailerIndex = response.videos.results.findIndex(
          (video: any) => video.type === "Trailer"
        );

        const trailerURL = `https://www.youtube.com/watch?v=${response.videos.results[trailerIndex]?.key}`;
        setTrailer(trailerURL);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <MovieDetails
      movie={movie}
      setShowPlayer={setShowPlayer}
      showPlayer={showPlayer}
      trailerURL={trailer}
    />
  );
};

export default MovieDetailPage;
