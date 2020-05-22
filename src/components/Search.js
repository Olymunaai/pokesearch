import React, { Fragment, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  function textChange(e) {
    setText(e.target.value);
  }

  const submitName = (e) => {
    e.preventDefault();
    props.searchName(text);
    setText("");
  };

  return (
    <div className="">
      <form className="container form-inline mb-2 mt-5" onSubmit={submitName}>
        <div className="m-auto">
          <label className="mb-2 text-left">Enter name or number...</label>
          <input
            className="form-control"
            type="text"
            onChange={textChange}
            value={text}
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
