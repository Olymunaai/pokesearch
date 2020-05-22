import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);

  const searchName = async (text) => {
    const apiSearch = text.toLowerCase();
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${apiSearch}/`
    );
    setPokemon(res);
    setLoading(true);
  };

  const searchNumber = async (text) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}/`);
    setPokemon(res);
    setLoading(true);
  };

  return (
    <div className="App">
      <Header />
      <Search searchName={searchName} />
      <Pokemon pokemon={pokemon.data} loading={loading} />
    </div>
  );
}

export default App;
