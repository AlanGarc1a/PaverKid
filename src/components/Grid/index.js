import styled from "styled-components";
import { size } from "../../globalStyles";

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 6rem;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};

  @media only screen and (max-width: ${size.mobile}) {
    flex-direction: column;
    row-gap: 5rem;
  }
`;

export const Col = styled.div`
  width: 100%;
`;
