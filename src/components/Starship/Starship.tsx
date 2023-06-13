// import React from "react";
import { useEffect, useState } from "react";
import { callShips } from "../../api";

const Starship = () => {
	const [ship, setShips] = useState<string[]>([]);
	useEffect(() => {
		const getShips = async () => {
			const ships = await callShips();
			setShips(ships);
		};
		getShips();
	}, []);

	return <div>{ship && <p>{ship}</p>}</div>;
};

export default Starship;
