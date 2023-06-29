import { FilmContainer } from "../../styles/StarshipComp";

export function FilmsComponent(props: any) {
	return (
		<FilmContainer>
			<img
				src={`https://starwars-visualguide.com/assets/img/films/${props.filmNum}.jpg`}
				alt="film where the ship appears"
			/>
		</FilmContainer>
	);
}
