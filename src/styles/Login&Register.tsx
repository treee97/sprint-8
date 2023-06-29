import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin: 3rem;
    font-size: 3rem;
  }
  h3 {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`;

export const FormItem = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;
export const FormButton = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  width: 100%;
  padding: 1rem;
  margin: 1rem;
`;
