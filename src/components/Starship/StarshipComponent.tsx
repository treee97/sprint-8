import React from "react";
import { useState } from "react";
import { shipType } from "../../types/types";
import { HttpStatusCode } from "axios";
//https://fonts.google.com/specimen/Play
//https://swapi.py4e.com/documentation#starships
type StarshipProps = {
  ship: shipType;
  onClick?: () => void;
};
const Starship = ({ ship }: StarshipProps) => {
  const [showData, setShowData] = useState<boolean>(false);

  const handleClick = () => {
    setShowData(!showData);
  };
  const url = ship.url;
  const picNum = url.replace(/\D/g, "");

  return (
    <div
      onClick={handleClick}
      key={ship.name}
      style={{ outline: "2px solid red", margin: "4 rem 0" }}
    >
      {!showData && (
        <>
          <div>name: {ship.name}</div>
          <div>model: {ship.model}</div>
        </>
      )}
      {showData && (
        <>
          <div>
            <div>{ship.name}</div>
            <div>
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${picNum}.jpg`}
                alt="starship"
                onError={(e) => {
                  e.currentTarget.src = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;
                }}
              />
            </div>
            <div>Starship Class: {ship.starship_class} </div>
            <div>Manufacturer: {ship.manufacturer}</div>
            <div>Cost: {ship.cost_in_credits} Credits</div>
          </div>
          <div>
            <div>Crew: {ship.crew}</div>
            <div>Passenger Capacity: {ship.passengers}</div>
            <div>Cargo Capacity: {ship.cargo_capacity}</div>
            <div>Consumables: {ship.consumables}</div>
            <div>Pilots: {ship.pilots}</div>
          </div>
          <div>
            <div>Length: {ship.length}</div>
            <div>Maximum Atmosphering Speed: {ship.max_atmosphering_speed}</div>
            <div>Hyperdrive Rating: {ship.hyperdrive_rating}</div>
            <div>Maximum Speed in Realspace: {ship.MGLT}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Starship;
