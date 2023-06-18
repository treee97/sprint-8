import React from "react";
import { useState, useEffect } from "react";
import { Starship } from "../../components";
import { starshipCall } from "../../api";
import { shipType } from "../../types/types";

const Starships = () => {
  const [ships, setShips] = useState<shipType[]>([]);

  useEffect(() => {
    const getShips = async () => {
      const getShipData = await starshipCall();
      //pass 2 parameters pageNumber and query??
      //https://www.youtube.com/watch?v=NZKUirTtxcg => webdevSimplified
      //https://www.youtube.com/watch?v=gJ5MnBVl1ZM
      // Infinite Scroll With API Call In React JS using react-infinite-scroll-component -NPM
      setShips(getShipData);
    };
    getShips();
  }, []);
  return (
    <div>
      <h1>starships</h1>
      {ships.map((ship, index) => (
        <Starship key={index} ship={ship} />
      ))}
    </div>
  );
};

export default Starships;
