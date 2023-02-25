import styled from "styled-components";
import contact from "../../assets/contact.jpg";
import Container from "../Container";
import { Text } from "../Text";

const ContactSection = styled.section`
  background-color: var(--lightGray);
  padding: 15rem 0rem;
`;

const ContactHero = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1)
    ),
    url(${contact});
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
`;

const ContactDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  text-align: center;
`;

const ContactButtonGroup = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  border: 0.2rem solid var(--gray);
  color: var(--white);
  font-size: var(--defaultFontSize);
  cursor: pointer;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactHero>
          <ContactDetails>
            <Text white>
              We would love to hear from you! If you have any questions about
              our paver installation services, or if you would like to request a
              quote, please don't hesitate to get in touch. Send us an email
              with your information and what you want installed!
            </Text>
            <ContactButtonGroup>
              <ContactButton href="mailto:Paveitlandscape@gmail.com">
                Get Started
              </ContactButton>
            </ContactButtonGroup>
          </ContactDetails>
        </ContactHero>
      </Container>
    </ContactSection>
  );
};

export default Contact;
