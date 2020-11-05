import React, { useState } from "react";
import FilmRow from "./FilmRow";

function FilmListing({ films, faves, handleFaveToggle, handleDetailsClick }) {
  const [filter, setFilter] = useState("all");

  function handleFilterClick(filter) {
    // console.log(`Setting filter to ${filter}`);
    setFilter(filter);
  }

  let allFilms = films.map((film, index) => (
    <FilmRow
      film={film}
      key={film.id}
      handleFaveToggle={() => handleFaveToggle(film)}
      handleDetailsClick={() => handleDetailsClick(film)}
    />
  ));

  let filterFilms = faves.map((film) => (
    <FilmRow
      film={film}
      key={film.id}
      handleFaveToggle={() => handleFaveToggle(film)}
      handleDetailsClick={() => handleDetailsClick(film)}
    />
  ));
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>

      {filter === "all" ? allFilms : filterFilms}
    </div>
  );
}

export default FilmListing;
