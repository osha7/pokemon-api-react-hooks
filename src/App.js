import React, { useState, useEffect } from "react";
import "./App.css";

const PokemonList = (props) => {
  const handleClick = (pokemon) => {
    // console.log('here')
    props.setSelectedPokemon(pokemon);
  };
  return (
    <>
      <h3>All Pokemon</h3>
      <ul>
        {props.pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <a
              onClick={() => {
                handleClick(pokemon);
              }}
            >
              {pokemon.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

// ({destructured})
const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }
  return <h3>{pokemon.name}</h3>;
};

export default function App() {
  // const [pokemons, setPokemons] = useState([{name: "oshaSaur"}])
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    fetch(pokemonApi)
      .then((resp) => resp.json())
      // .then(data => console.log(data.results))
      .then((data) => setPokemons(data.results));
  });

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <ul style={{ color: "lightgrey", fontSize: "16px" }}>
        <li>1. Show a list of Pokemon</li>
        <li>2. When I click a Pokemon name, show details about that Pokemon</li>
        <li>
          3. <b>Bonus:</b> Search Filter
        </li>
        <li>
          4. <b>Bonus:</b> Additional Information from another API
        </li>
      </ul>
      <PokemonList
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonDetail pokemon={selectedPokemon} />
    </div>
  );
}
