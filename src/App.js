import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import MovieList from "./components/MovieList";
import Popup from "./components/Popup";

function App() {
  const movie_api_url = "http://www.omdbapi.com/?apikey=9565096a";

  const [state, setState] = useState({
    inputMovieName: "",
    results: [],
    selected: {}
  });

  const searchMovie = e => {
    if (e.key === "Enter") {
      axios(movie_api_url + "&s=" + state.inputMovieName).then(({ data }) => {
        let search_result = data.Search;

        setState(prevState => {
          return { ...prevState, results: search_result };
        });
      });
    }
  };

  const handleInputInSearch = e => {
    let movieName = e.target.value;

    setState(prevState => {
      return { ...prevState, inputMovieName: movieName };
    });
  };

  const openPopup = id => {
    axios(movie_api_url + "&i=" + id).then(({ data }) => {
      let movieDetails = data;
      setState(prevState => {
        return { ...prevState, selected: movieDetails };
      });

    });
  };

  const closePop = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <SearchBar
          handleInput={handleInputInSearch}
          handleSearchCall={searchMovie}
        />
        <MovieList results={state.results} onPopupClick={openPopup} />
        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} onPopupClose={closePop} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
