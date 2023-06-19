import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Starships from "./pages/Starships/Starships";
import Home from "./pages/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/starships" element={<Starships />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
