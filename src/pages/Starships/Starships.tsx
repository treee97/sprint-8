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
      setShips(getShipData);
    };
    getShips();
  });
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
