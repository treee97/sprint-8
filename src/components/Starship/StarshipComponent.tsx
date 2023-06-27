import { useState } from "react";
import { FaShuttleSpace } from "react-icons/fa6";
import { shipType } from "../../types/types";
import { ShipData, ShipContainer, ShipBox } from "../../styles/StarshipComp";
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
    <ShipContainer>
      <ShipData onClick={handleClick} key={ship.name}>
        {!showData && (
          <ShipBox>
            <div>
              <div>name: {ship.name}</div>
              <div>model: {ship.model}</div>
            </div>

            <div>
              <FaShuttleSpace style={{ fontSize: "2rem" }} />
            </div>
          </ShipBox>
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
              <div>
                Maximum Atmosphering Speed: {ship.max_atmosphering_speed}
              </div>
              <div>Hyperdrive Rating: {ship.hyperdrive_rating}</div>
              <div>Maximum Speed in Realspace: {ship.MGLT}</div>
            </div>
          </>
        )}
      </ShipData>
    </ShipContainer>
  );
};

export default Starship;
