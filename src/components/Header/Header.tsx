import { logo, logo2, logo3 } from "../../assets";
import { Link } from "react-router-dom";
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
					<Link to="/">
						<Image src={logo3} alt="starwars_logo" />
					</Link>
				</LogoHeader>

				<LoginHeader>
					<div>
						<NavbarLink to="/login">Sign In</NavbarLink> |
						<NavbarLink to="/register">Sign Up</NavbarLink>
					</div>
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
