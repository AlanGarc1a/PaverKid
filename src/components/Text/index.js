import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => (props.white ? "var(--white)" : "var(--black)")};
  font-size: var(--defaultFontSize);
`;

export const GreenText = styled.span`
  color: var(--green);
`;

export const SmText = styled.span`
  font-size: var(1rem);
`;
