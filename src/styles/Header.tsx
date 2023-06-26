import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  min-height: 100%;
  // outline: 2px solid green;

  border-bottom: 1px solid #ccc;
  color: white;
  background: #000;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 80%;
  // object-fit: contain;

  // outline: 1px solid red;
`;
export const Image = styled.img`
  outline: 1px solid blue;
  flex: 1;
  object-fit: contain;
  max-width: 20vw;
  // box-shadow: 0 0 20px #fad000;
`;
export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
`;
// los botones del login seran un react router con un styled comp. como navbarLink
export const Nav = styled.nav`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-bottom: 1px solid #ccc;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: gray;
  padding: 0.5rem;
  font-size: 1.5rem;
`;
