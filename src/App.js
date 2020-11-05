import React, { useState, useEffect } from "react";
import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails";
import TMDB from "./TMDB";

function App() {
  //part 3
  const [films, setFilms] = useState(TMDB.films);
  const [faves, setFaves] = useState([]);
  const [current, setCurrent] = useState({});

  //part 4
  // useEffect(() => {
  //   getMovies()
  // }, []);

  // async function getMovies() {
  //   let films = await axios.get("https://api.themoviedb.org/3/movie/${film.id}?api_key=${REACT_APP_APIKEY}&append_to_response=videos,images&language=en");
  //   setFilms(films.data);
  // }
  function handleFaveToggle(film) {
    let tempFilms = [...faves];
    let filmIndex = tempFilms.indexOf(film);

    if (filmIndex > -1) {
      tempFilms.splice(filmIndex, 1);
    } else {
      tempFilms.push(film);
    }
    setFaves(tempFilms);
  }

  // handle Details click
  function handleDetailsClick(film) {
    setCurrent(film);
  }

  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        handleFaveToggle={handleFaveToggle}
        handleDetailsClick={handleDetailsClick}
      />
      <FilmDetails films={films} current={current} />
    </div>
  );
}

export default App;
