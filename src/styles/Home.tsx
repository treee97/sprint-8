import styled from "styled-components";
import { sw_background } from "../assets";

export const Background = styled.div`
  min-height: 100vh;

  color: white;
  background: url(${sw_background});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
