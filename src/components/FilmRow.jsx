import React, { useState } from "react";
import Fave from "./Fave";

function FilmRow({ film, handleFaveToggle, handleDetailsClick }) {
  const [isFave, setIsFave] = useState(false);

  function getFullYear() {
    let date = new Date(film.release_date);
    return date.getFullYear();
  }

  //fave Toggler
  function onFaveToggle() {
    handleFaveToggle(film);
    setIsFave(!isFave);
  }

  let posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;
  return (
    <div className="film-row" onClick={handleDetailsClick}>
      <img src={posterUrl} alt={film.title} />

      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{getFullYear()}</p>
      </div>
      <Fave onFaveToggle={onFaveToggle} isFave={isFave} />
    </div>
  );
}

export default FilmRow;
