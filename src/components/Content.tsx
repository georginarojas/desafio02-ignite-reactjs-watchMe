import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";

import "../styles/sidebar.scss";
import React from "react";
import { Header } from "./Header";

export function Content() {
  const { selectedGenre, movies } = useMovies();

  return (
    <div className="container">
      <Header title={selectedGenre.title} />
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
