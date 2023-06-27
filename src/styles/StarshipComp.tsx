import styled from "styled-components";

export const ShipData = styled.div`
  min-width: 40%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  padding: 0.8rem;
  margin: 0.3rem;
  background-image: linear-gradient(
    to top,
    #1f2023,
    #1f2225,
    #202327,
    #202528,
    #202729
  );
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to bottom,
      #1f2023,
      #1f2225,
      #202327,
      #202528,
      #202729
    );
  }
`;
export const ShipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
`;
export const ShipBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
