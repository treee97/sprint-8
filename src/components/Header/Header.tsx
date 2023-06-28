import { useState, useEffect } from "react";
import { logo, logo2, logo3 } from "../../assets";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Image,
  LogoHeader,
  HeaderContainer,
  Nav,
  NavbarLink,
  LoginHeader,
} from "../../styles/Header";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <>
      <HeaderContainer>
        <div style={{ flexBasis: "20%" }}>
          {/* outline: "1px solid blue"  */}
          links here
        </div>
        <LogoHeader>
          <Link to="/">
            <Image src={logo3} alt="starwars_logo" />
          </Link>
        </LogoHeader>

        <LoginHeader>
          {user ? (
            <>
              <div>Welcome {user.email}!</div> {/* wtf!! idk how to fix this*/}
              <NavbarLink to="/" onClick={handleSignOut}>
                Log Off
              </NavbarLink>
            </>
          ) : (
            <div>
              <NavbarLink to="/login">Sign In</NavbarLink> |
              <NavbarLink to="/register">Sign Up</NavbarLink>
            </div>
          )}
        </LoginHeader>
      </HeaderContainer>
      <Nav>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/starships">Starships</NavbarLink>
      </Nav>
    </>
  );
};

export default Header;
