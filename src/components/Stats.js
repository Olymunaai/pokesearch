import React from "react";

const Stats = ({ hp, atk, def, spa, spd, spe }) => {
  console.log(hp);
  return (
    <ul className="statsList">
      <li>
        <strong>HP: </strong>
        {hp}
      </li>
      <li>
        <strong>Attack: </strong>
        {atk}
      </li>
      <li>
        <strong>Defense: </strong>
        {def}
      </li>
      <li>
        <strong>Sp. Attack: </strong>
        {spa}
      </li>
      <li>
        <strong>Sp. Defense: </strong>
        {spd}
      </li>
      <li>
        <strong>Speed: </strong>
        {spe}
      </li>
    </ul>
  );
};

export default Stats;
