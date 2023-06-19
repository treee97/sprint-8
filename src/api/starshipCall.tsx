import axios from "axios";

const starshipCall = async (page: number) => {
  const getShips = await axios({
    method: "GET",
    url: `https://swapi.dev/api/starships/?page=${page}`,
  });
  console.log(getShips.data);

  return getShips.data.results;
};

export default starshipCall;
