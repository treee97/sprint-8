import { useNavigate } from "react-router-dom";
import { Background } from "../../styles/Home";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setAuthing] = useState(false);

	const signInWithEmail = async (e: any) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		//used to extract the values of the email and password fields from the form submission event.

		setAuthing(true);
		try {
			await signInWithEmailAndPassword(auth, email.value, password.value);
			console.log("Login successful");
			navigate("/");
		} catch (error) {
			console.log(error);
			setAuthing(false);
		}
	};
	return (
		<Background>
			<div>
				<h1>Login</h1>
				<form onSubmit={signInWithEmail}>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" required />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" required />
					</div>
					<button type="submit" disabled={authing}>
						Sign in with Email/Password
					</button>
				</form>

				{/* <Link to="/register">Or Register Here!</Link> */}
			</div>
			;
		</Background>
	);
};

export default Login;
