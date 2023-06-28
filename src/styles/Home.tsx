import styled from "styled-components";
import { sw_background } from "../assets";

export const Background = styled.div`
  min-height: 100vh;
  /* outline: 3px solid yellow; */

  color: white;
  background: url(${sw_background});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
`;
