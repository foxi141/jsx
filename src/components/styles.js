import styled from "styled-components";

export const Feedback = styled.div`
  color: ${({ values }) => (values === 2 ? "red" : "blue")};
  font-size: ${({ values }) => (values === 2 ? "25rem" : "1rem")};
  width: 100wv;
`;

export const Button = styled.button`
color: ${({COST}) => (COST === "black")};

`;

export const Input = styled.input``;
