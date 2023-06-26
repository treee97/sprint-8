import { Link } from "react-router-dom";
import { logo2 } from "../../assets";
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
				<div style={{ flexBasis: "20%", outline: "1px solid blue" }}></div>
				<LogoHeader>
					<Image src={logo2} alt="starwars_logo" />
				</LogoHeader>

				<LoginHeader>
					<div>login / logoff</div>
				</LoginHeader>
			</HeaderContainer>
			<Nav>
				<NavbarLink to="/">Home</NavbarLink>
				<NavbarLink to="/starships">starships</NavbarLink>
			</Nav>
		</>
	);
};

export default Header;
