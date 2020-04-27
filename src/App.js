import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";

function App() {
  const movie_api_url = "http://www.omdbapi.com/?i=&apikey=9565096a";
  
  const [state, setState] = useState({
    inputMovieName: "",
    results: [],
    selected: {}
  });

  const searchMovie = e => {
    if(e.key === "Enter"){
      axios(movie_api_url+"&s="+state.inputMovieName).then(data => {
        console.log(data)
      });
    }
  };


  const handleInputInSearch = e => {
    let movieName = e.target.value;

    setState(prevState => {
      return { ...prevState, inputMovieName: movieName };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <SearchBar handleInput={handleInputInSearch} handleSearchCall={searchMovie} />
      </main>
    </div>
  );
}

export default App;
