import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import Container from "../Container";
import { size } from "../../globalStyles";

const FooterContainer = styled.footer`
  background-color: var(--primary);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  align-items: center;

  @media only screen and (max-width: ${size.mobile}) {
    flex-direction: column;
    row-gap: 6rem;
    align-items: flex-start;
  }
`;

const FooterTitle = styled.div`
  font-size: 2rem;
  color: var(--white);
`;

const FooterSocial = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--defaultFontSize);
  color: var(--white);
`;

const FooterIG = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--white);
`;

const FooterLink = styled.div`
  color: var(--white);
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const FooterButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  border: 0.1rem solid var(--white);
  color: var(--white);
  font-size: var(--defaultFontSize);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--white);
    color: var(--primary);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: var(--defaultFontSize);
  color: var(--white);
  padding: 2rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterTitle>Paver It Landscape</FooterTitle>
          <FooterSocial>
            Follow Us
            <FooterIG
              target="_blank"
              href="https://www.instagram.com/paveitlandscape/"
            >
              <AiOutlineInstagram size={25} />
            </FooterIG>
          </FooterSocial>
          <div>
            <FooterLink>(818) 406-5543</FooterLink>
            <FooterButton href="mailto:Paveitlandscape@gmail.com">
              Free Estimate
            </FooterButton>
          </div>
        </FooterContent>
      </Container>
      <FooterBottom>
        &copy;
        {new Date().getFullYear()} Pave it Landscape
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
