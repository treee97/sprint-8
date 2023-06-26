import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100%;
	outline: 2px solid green;
	// flex-grow: auto;
`;

export const LogoHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-basis: 80%;
	// object-fit: contain;

	outline: 1px solid red;
`;
export const Image = styled.img`
	outline: 1px solid blue;
	width: 40%;
`;
export const LoginHeader = styled.div`
	display: flex;
	flex-basis: 20%;
`;
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavbarLink = styled(Link)``;
