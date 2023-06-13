// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://swapi.dev/api";
const callShips = async () => {
	// const [ship, setShip] = useState<string[]>([]);
	const getShips = axios(`${URL}/starships`)
		.then((res) => res.data.results)
		.catch((err) => console.error(err));
	return getShips;
};

export default callShips;
