import React, { useState } from "react";
import axios from "axios";

const Abilities = ({ abilities }) => {
  return (
    <div className="abilities">
      <strong>Abilities</strong>
      {abilities.map((ability) => (
        <p className="ability">
          {ability.is_hidden === true
            ? ability.ability.name + "*"
            : ability.ability.name}
        </p>
      ))}
      <p class="HA">* indicates hidden ability.</p>
    </div>
  );
};

export default Abilities;
