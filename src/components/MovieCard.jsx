import React from "react";

function MovieCard({ result, onPopClick }) {
  return (
    <div className="movieCard" onClick={() => onPopClick(result.imdbID)} >
      <img src={result.Poster} alt="img" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default MovieCard;
