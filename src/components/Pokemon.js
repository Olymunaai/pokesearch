import React from "react";
import Abilities from "./Abilities";
import Stats from "./Stats.js";

const Pokemon = ({ pokemon, loading }) => {
  if (loading === false) {
    return <div></div>;
  } else {
    const { name, types, sprites, stats, abilities, moves, id } = pokemon;

    const [spe, spd, spa, def, atk, hp] = stats;

    const nameCap =
      name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();

    return (
      <div class="">
        <div class="pkmnCard">
          <h1 className="pkmnTitles">
            {nameCap} <span class="pokeid">#{id}</span>
          </h1>

          <div className="pokemonEntry row">
            <div className="nameSpriteType col">
              <div className="sprites">
                <img src={sprites.front_default} alt="" className="sprite" />
                <img src={sprites.front_shiny} alt="" className="sprite" />
              </div>
              {types.map((type) => (
                <h6 className={type.type.name}>{type.type.name}</h6>
              ))}
            </div>
            <div className="stats col">
              <Stats
                hp={hp.base_stat}
                atk={atk.base_stat}
                def={def.base_stat}
                spa={spa.base_stat}
                spd={spd.base_stat}
                spe={spe.base_stat}
              />
              <Abilities abilities={abilities} />
            </div>
          </div>
        </div>
        {/* <Moves moves={moves} /> */}
      </div>
    );
  }
};

export default Pokemon;
