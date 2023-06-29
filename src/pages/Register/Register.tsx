import { Background } from "../../styles/Home";
//https://www.youtube.com/watch?v=b_52NmIfDr8
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormContainer,
  FormInput,
  FormItem,
  FormButton,
} from "../../styles/Login&Register";

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
      <FormContainer>
        <h2>Register Now</h2>
        <Form onSubmit={handleRegister}>
          <FormItem>
            <label htmlFor="name">Name</label>
            <FormInput type="text" name="name" id="name" required />
          </FormItem>
          <FormItem>
            <label htmlFor="email">Email</label>
            <FormInput type="email" name="email" id="email" required />
          </FormItem>
          <FormItem>
            <label htmlFor="password">Password</label>
            <FormInput type="password" name="password" id="password" required />
          </FormItem>
          <FormButton type="submit" disabled={registering}>
            Register
          </FormButton>
        </Form>
      </FormContainer>
    </Background>
  );
};

export default Register;
