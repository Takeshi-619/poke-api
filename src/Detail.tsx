import React, { useEffect, useState } from "react";
import useStore from "./store";

type Poke = {
  name: string;
  id: string;
  image: string;
  type: string;
};

export default function Detail() {
  const detailId = useStore((state) => state.detailId);
  const [poke, setPoke] = useState<Poke[]>([]);
  const fetchPokemon = () => {
    const promises = [];
    const url = `https:pokeapi.co/api/v2/pokemon/${detailId}`;
    promises.push(fetch(url).then((res) => res.json()));

    Promise.all(promises).then((results) => {
      const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types
          .map((type: { type: { name: string } }) => type.type.name)
          .join(", "),
      }));
      console.log(pokemon);
      setPoke(pokemon);
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <>
      <h1>{detailId}</h1>
      {poke &&
        poke.map((i, index) => (
          <div key={index}>
            <img className="card-image" src={i.image} />
            <h2 className="card-title">{i.name}</h2>
            <p className="card-subtitle">Type: {i.type}</p>
          </div>
        ))}
    </>
  );
}
