import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [planet, setPlanet] = useState("");
  const getData = () => {
    axios("https://swapi.dev/api/planets/1/")
      .then((res) => setPlanet(res.data.name))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button onClick={getData}>Fetch Data with Axios</button>
      {planet && <p>{planet}</p>}
    </div>
  );
}

export default App;
