import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0;
  width: 100%;
`;

export const InnerText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Text = styled.span`
  font-weight: ${({ isBold }) => (isBold ? "700" : "400")};
`;

export const Value = styled.span`
  font-weight: ${({ isBold }) => (isBold ? "700" : "400")};
`;

export const InfoText = styled.i`
  display: block;
  margin: 10px 0;
`;
