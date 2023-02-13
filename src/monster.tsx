import React, { useEffect, useState } from "react";
import "./Monster.scss";
import { useLocation } from "react-router-dom";
import useStore from "./store";

type Poke = {
  name: any;
  id: any;
  image: any;
  type: any;
};

function Monster() {
  const [poke, setPoke] = useState<Poke[]>([]);
  const pkData = useStore((state) => state.pkData);

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i < 10; i++) {
      const url = `https:pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
      const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types
          .map((type: { type: { name: string } }) => type.type.name)
          .join(", "),
      }));
      setPoke(pokemon);
    });
  };

  fetchPokemon();

  return (
    <div>
      <div className="container">
        <ul id="pokedex">
          {poke.map((pokemon, index) => (
            <li className="card" key={index}>
              <img className="card-image" src={pokemon.image} />
              <h2 className="card-title">{pokemon.name}</h2>
              <p className="card-subtitle">Type: {pokemon.type}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="poke_container" className="poke_container"></div>
      <div>{pkData}</div>
      <hr />
    </div>
  );
}

export default Monster;
