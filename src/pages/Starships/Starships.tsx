import React from "react";
import { useState, useEffect } from "react";
import { Starship } from "../../components";
import { starshipCall } from "../../api";
import { shipType } from "../../types/types";

const Starships = () => {
	const [ships, setShips] = useState<shipType[]>([]);
	const [isFocused, setIsFocused] = useState<number>(0);

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
				<Starship key={index} ship={ship} itsFocused={isFocused === index} />
			))}
		</div>
	);
};

export default Starships;
