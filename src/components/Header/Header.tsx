import { logo, logo2, logo3 } from "../../assets";
import {
  Image,
  LogoHeader,
  HeaderContainer,
  Nav,
  NavbarLink,
  LoginHeader,
} from "../../styles/Header";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div style={{ flexBasis: "20%" }}>
          {/* outline: "1px solid blue"  */}
          links here
        </div>
        <LogoHeader>
          <Image src={logo3} alt="starwars_logo" />
        </LogoHeader>

        <LoginHeader>
          <div>Sign In | Sign Up</div>
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
