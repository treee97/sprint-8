import { useState } from "react";
import { FaShuttleSpace } from "react-icons/fa6";
import { shipType } from "../../types/types";
import {
  TitleText,
  ShipData,
  ShipContainer,
  ShipBox,
  Title_Image,
  Model_Class,
  Crew_Length,
  Pilots,
  Films,
} from "../../styles/StarshipComp";
import { FilmsComponent } from "./FilmsComponent";
import { PilotsComponent } from "./PilotsComponent";
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
              <div>{ship.name}</div>
              <div>{ship.model}</div>
            </div>

            <div>
              <FaShuttleSpace style={{ fontSize: "2rem" }} />
            </div>
          </ShipBox>
        )}
        {showData && (
          <>
            <div>
              <Title_Image>
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
              </Title_Image>
              <Model_Class>
                <div>
                  <TitleText>Model:</TitleText> {ship.model}
                </div>
                <div>
                  <TitleText>Starship Class:</TitleText> {ship.starship_class}{" "}
                </div>
                <div>
                  <TitleText>Manufacturer:</TitleText> {ship.manufacturer}
                </div>
                <div>
                  <TitleText>Cost:</TitleText> {ship.cost_in_credits}{" "}
                  <TitleText>Credits</TitleText>
                </div>
              </Model_Class>
              <Crew_Length>
                <div>
                  <div>
                    <TitleText>Crew:</TitleText> {ship.crew}
                  </div>
                  <div>
                    <TitleText>Passenger Capacity:</TitleText> {ship.passengers}
                  </div>
                  <div>
                    <TitleText>Cargo Capacity:</TitleText> {ship.cargo_capacity}
                  </div>
                  <div>
                    <TitleText>Consumables:</TitleText> {ship.consumables}
                  </div>
                </div>
                <div>
                  <div>
                    <TitleText>Length:</TitleText> {ship.length}
                  </div>
                  <div>
                    <TitleText>Maximum Atmosphering Speed:</TitleText>
                    {ship.max_atmosphering_speed}
                  </div>
                  <div>
                    <TitleText>Hyperdrive Rating:</TitleText>
                    {ship.hyperdrive_rating}
                  </div>
                  <div>
                    <TitleText>Maximum Speed in Realspace:</TitleText>
                    {ship.MGLT}
                  </div>
                </div>
              </Crew_Length>
              <Pilots>
                <TitleText>Pilots:</TitleText>

                {ship.pilots.length > 0 ? (
                  ship.pilots.map((pilot, index) => {
                    const pilotUrl: string = pilot;
                    const pilotNum = pilotUrl.replace(/\D/g, "");
                    return <PilotsComponent key={index} pilotNum={pilotNum} />;
                  })
                ) : (
                  <div>No pilots found</div>
                )}
              </Pilots>
              <Films>
                <TitleText>Films:</TitleText>
                {ship.films.map((film, index) => {
                  const filmUrl: string = film;
                  const filmNum = filmUrl.replace(/\D/g, "");
                  return <FilmsComponent key={index} filmNum={filmNum} />;
                })}
              </Films>
            </div>
          </>
        )}
      </ShipData>
    </ShipContainer>
  );
};

export default Starship;
