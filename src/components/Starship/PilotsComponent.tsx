import { PilotContainer } from "../../styles/StarshipComp";

export function PilotsComponent(props: any) {
	return (
		<PilotContainer>
			<img
				src={`https://starwars-visualguide.com/assets/img/characters/${props.pilotNum}.jpg`}
				alt="pilot of the ship"
			/>
		</PilotContainer>
	);
}
