import React from "react";
import MovieCard from './MovieCard';

function MovieList({ results }) {
  return (
    <section className="results">
      {results.map(result => (
        <MovieCard movieInformation={result} />
      ))}
    </section>
  );
}

export default MovieList;
