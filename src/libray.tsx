import React, { useEffect, useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function Libray() {
  const [pkname, setPkname] = useState([]);
  async function poke() {
    const res = await fetch(url);
    const current = await res.json();
    const pkData = current.game_indices;
    console.log(pkData);
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

  return (
    <div>
      <h1>pokemon図鑑</h1>
      <select>
        {pkname &&
          pkname.map((series, i) => (
            <option className="names" key={i}>
              {series}
            </option>
          ))}
      </select>
      <div>状態管理</div>
      <button>
        <a href="/monster">モンスターの詳細</a>
      </button>
    </div>
  );
}

export default Libray;
