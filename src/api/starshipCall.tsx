import axios from "axios";

const starshipCall = async (page: number) => {
	const getShips = await axios({
		method: "GET",
		url: `https://swapi.dev/api/starships/?page=${page}`,
	});

	return getShips.data;
};

export default starshipCall;
