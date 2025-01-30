import React from "react";

const MovieCard = ({ movie: { poster_path, title, overview } }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
    </li>
  );
};

export default MovieCard;
