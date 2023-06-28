import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import AuthRoute from "./components/Auth/AuthRoute";
import { config } from "./config/config";
import { Header } from "./components";
import Starships from "./pages/Starships/Starships";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

initializeApp(config.firebaseConfig);

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/starships"
					element={
						<AuthRoute>
							<Starships />
						</AuthRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
