import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";
// onAuthStateChanged => this works like as a subscription
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../../styles/Home";

export type typeProps = {
  children: React.ReactNode;
};

const AuthRoute = (props: typeProps) => {
  const { children } = props;

  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = AuthCheck();
    return () => unsubscribe();
  }, [auth]);

  const AuthCheck = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });
  };

  if (loading) return <Background>Loading ...</Background>;

  return <div>{children}</div>;
};

export default AuthRoute;
