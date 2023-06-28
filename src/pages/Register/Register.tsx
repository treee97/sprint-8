import { Background } from "../../styles/Home";
//https://www.youtube.com/watch?v=b_52NmIfDr8
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [registering, setRegistering] = useState(false);

	const handleRegister = async (event: any) => {
		event.preventDefault();
		const { name, email, password } = event.target.elements;

		setRegistering(true);
		try {
			await createUserWithEmailAndPassword(auth, email.value, password.value);
			console.log("Registration successful");
			navigate("/login");
		} catch (error) {
			console.log(error);
			setRegistering(false);
		}
	};

	return (
		<Background>
			<h1>Register Now</h1>
			<form onSubmit={handleRegister}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<button type="submit" disabled={registering}>
					Register
				</button>
			</form>
		</Background>
	);
};

export default Register;
