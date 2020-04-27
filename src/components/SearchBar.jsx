import React from "react";

function SearchBar(props) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={props.handleInput}
        onKeyPress={props.handleSearchCall}
      />
    </section>
  );
}

export default SearchBar;
