import styled from "styled-components";
export const TitleText = styled.span`
  color: #fad000;
`;
export const ShipData = styled.div`
  min-width: 40vw;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  padding: 1.5rem;
  margin: 1rem;
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
  @media only screen and (max-width: 900px) {
    min-width: 80%;
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

// ============ CSS of DATA =====================

export const Title_Image = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const Model_Class = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Crew_Length = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Pilots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
