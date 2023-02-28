import React, { useEffect, useState } from "react";
import useStore from "../store";
import Btn from "../com/Btn";

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
      {poke &&
        poke.map((i, index) => (
          <div key={index} className="card-content">
            <div className="monster">
              <img className="card-image-detail" src={i.image} alt="" />
              <h3 className="card-title">
                <span>NO.{detailId}</span>
                {i.name}
              </h3>
              <p className="card-subtitle content-flex">
                <h3>Ability</h3>

                {i.ability}
              </p>
              <p className="card-subtitle content-flex">
                <h3>Type</h3>

                {i.type}
              </p>
            </div>
            <div className="card-stats">
              <h3>Stats</h3>
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

                    <p className="sec-p">{item.num}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      <div className="btn-wrap">
        <h1 className="btn-title">
          <div>Back</div>
          <div>to</div>
          <div>Monster</div>
        </h1>
        <Btn href={`/monster`} allow={"←"}></Btn>
      </div>
    </>
  );
}
