import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ results, onPopupClick }) {
  return (
    <section className="results">
      {results.map(result => (
        <MovieCard
          key={result.imdbID}
          result={result}
          onPopClick={onPopupClick}
        />
      ))}
    </section>
  );
}

export default MovieList;
