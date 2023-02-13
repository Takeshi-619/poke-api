import React, { useEffect, useState } from "react";
import useStore from "./store";
import Btn from "./com/Btn";

type Poke = {
  name: string;
  id: string;
  image: string;
  stats: any;
  ability: string;
  type: string;
  [key: string]: any;
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
        stats: data.stats.map((item: any) => item.stat.name),
        base_stats: data.stats.map((i: { base_stat: string }) => i.base_stat),
        ability: data.abilities
          .map((ability: any) => ability.ability.name)
          .join(", "),
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
          <div key={index} className="card-content">
            <img className="card-image-detail" src={i.image} />
            <h2 className="card-title">{i.name}</h2>
            <p className="card-subtitle content-flex">
              <h2>Ability</h2>
              <span>:</span>
              {i.ability}
            </p>
            <p className="card-subtitle content-flex">
              <h2>Type</h2>
              <span>:</span>
              {i.type}
            </p>
            <div className="card-stats">
              <h2>Stats</h2>
              {i.stats
                .reduce((pre: any, cur: any, index: any) => {
                  pre.push({
                    stat: cur,
                    num: i.base_stats[index],
                  });
                  return pre;
                }, [])
                .map((item: any, i: any) => (
                  <div key={i} className="stats-content">
                    <p className="first-p">{item.stat}</p>
                    <span>:</span>
                    <p className="sec-p">{item.num}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
}
