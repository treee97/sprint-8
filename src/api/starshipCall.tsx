import axios from "axios";

const starshipCall = async () => {
	const getShips = await axios({
		method: "GET",
		url: `https://swapi.dev/api/starships/`,
	});

	return getShips.data.results;
};

export default starshipCall;

// try {
// 	const getShips = await axios(`https://swapi.dev/api/starships/`);
// 	return getShips.data.results;
// } catch (e) {
// 	console.error(e);
// }
