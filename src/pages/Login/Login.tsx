import { useNavigate } from "react-router-dom";
import { Background } from "../../styles/Home";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Form, FormContainer, FormItem } from "../../styles/Login&Register";
import { NavbarLink } from "../../styles/Header";
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
			<FormContainer>
				<h2>Login to see the whole website!</h2>
				<Form onSubmit={signInWithEmail}>
					<FormItem>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" required />
					</FormItem>
					<FormItem>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" required />
					</FormItem>
					<button type="submit" disabled={authing}>
						Sign in with Email/Password
					</button>
				</Form>

				{/* <Link to="/register">Or Register Here!</Link> */}
				<h3>
					<NavbarLink to="/register">Or Register HERE!</NavbarLink>
				</h3>
			</FormContainer>
		</Background>
	);
};

export default Login;
