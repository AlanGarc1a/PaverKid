import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
