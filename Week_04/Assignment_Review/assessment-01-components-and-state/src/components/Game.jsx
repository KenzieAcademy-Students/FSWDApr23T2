import React from "react";
import Team from "./Team";

function Game({ venue }) {
  return (
    <div>
      <h2>Welcome to {venue}</h2>
      <Team
        name="Florida Panthers"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Florida_Panthers_2016_logo.svg/1200px-Florida_Panthers_2016_logo.svg.png"
      />
      <span>VS.</span>
      <Team
        name="Vegas Golden Knights"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Vegas_Golden_Knights_logo.svg/1200px-Vegas_Golden_Knights_logo.svg.png"
      />
    </div>
  );
}

export default Game;
