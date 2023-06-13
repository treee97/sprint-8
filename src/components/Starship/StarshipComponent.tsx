import { shipType } from "../../types/types";

type StarshipProps = {
  ship: shipType;
};
const Starship = ({ ship }: StarshipProps) => {
  return (
    <div>
      <div>name: {ship.name}</div>
      <div>model: {ship.model}</div>
    </div>
  );
};

export default Starship;
