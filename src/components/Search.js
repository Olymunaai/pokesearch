import React, { Fragment, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  function textChange(e) {
    setText(e.target.value);
  }

  function numberChange(e) {
    setNumber(e.target.value);
  }

  const submitName = (e) => {
    e.preventDefault();
    props.searchName(text);
    setText("");
  };

  const submitNumber = (e) => {
    e.preventDefault();
    props.searchNumber(number);
    setNumber("");
  };

  return (
    <div className="">
      <form className="container form-inline mb-2 mt-5" onSubmit={submitName}>
        <div className="m-auto">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Pokémon name..."
            onChange={textChange}
            value={text}
          />
          <button type="submit" className="btn btn-dark ml-2 search">
            Search
          </button>
        </div>
      </form>
      <h6 class="text-center">or</h6>
      <form className="container form-inline mb-5 mt-3" onSubmit={submitNumber}>
        <div className="m-auto">
          <input
            className="form-control"
            type="number"
            placeholder="Enter entry number..."
            onChange={numberChange}
            value={number}
          />
          <button type="submit" className="btn btn-dark ml-2 search">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
