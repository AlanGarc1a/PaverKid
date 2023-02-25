import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) =>
    props.type === "secondary" ? "var(--white)" : "var(--primary)"};
  color: ${(props) =>
    props.type === "secondary" ? "var(--primary)" : "var(--white)"};
  font-size: var(--defaultFontSize);
  cursor: pointer;
  text-decoration: none;
`;

const Button = ({ children, href, type }) => {
  return (
    <StyledButton href={href} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
