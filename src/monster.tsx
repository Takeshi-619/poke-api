import React, { useState } from "react";
import "./Monster.scss";
import useStore from "./store";
import { useNavigate } from "react-router-dom";

type Poke = {
  name: string;
  id: string;
  image: string;
  type: string;
};

function Monster() {
  const [poke, setPoke] = useState<Poke[]>([]);
  const { pkData, setDetail } = useStore((state) => state);
  const navigate = useNavigate();

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i < 50; i++) {
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

  const toDetail = (id: string) => {
    setDetail(id);
    navigate(`/detail`);
  };

  return (
    <div className="container">
      <h1>pokemon図鑑</h1>
      <div className="poke-container">
        <ul id="pokedex">
          {poke.map((pokemon, index) => (
            <li
              className="card"
              key={index}
              onClick={() => toDetail(pokemon.id)}>
              <img className="card-image" src={pokemon.image} />
              <h2 className="card-title">{pokemon.name}</h2>
              <p className="card-subtitle">Type: {pokemon.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Monster;
