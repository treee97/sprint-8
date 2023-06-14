import axios from "axios";

const starshipCall = async () => {
	try {
		const getShips = await axios(`https://swapi.dev/api/starships/`);
		return getShips.data.results;
	} catch (e) {
		console.error(e);
	}
};

export default starshipCall;
