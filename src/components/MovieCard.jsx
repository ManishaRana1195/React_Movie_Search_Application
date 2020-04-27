import React from "react";

function MovieCard({ movieInformation }) {
  return (
    <div className="movieInformation">
      <img src={movieInformation.Poster} alt="img" />
      <h3>{movieInformation.Title}</h3>
    </div>
  );
}

export default MovieCard;