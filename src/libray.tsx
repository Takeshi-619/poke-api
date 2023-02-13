import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useStore from "./store";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function Libray() {
  const [pkname, setPkname] = useState([]);
  const setPkData = useStore((state) => state.setPkData);
  async function poke() {
    const res = await fetch(url);
    const current = await res.json();
    const pkData = current.game_indices;
    // console.log(pkData);
    const pkDataName = pkData.reduce((p: any[], c: any) => {
      p.push(c.version.name);
      return p;
    }, [] as any[]);
    const pkDataUrl = pkData.reduce((p: any[], c: any) => {
      p.push(c.version.url);
      return p;
    }, [] as any[]);
    setPkname(pkDataName);
  }

  useEffect(() => {
    poke();
  });
  const selecter = useRef(null);

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = e.target.value;
    setPkData(select);
  };

  return (
    <div>
      <h1>pokemon図鑑</h1>
      <select onChange={(e) => change(e)} ref={selecter}>
        {pkname &&
          pkname.map((series, i) => (
            <option className="names" key={i}>
              {series}
            </option>
          ))}
      </select>
      <button>
        <Link to={"/monster"}>
          <a>モンスターの詳細</a>
        </Link>
      </button>
    </div>
  );
}

export default Libray;
