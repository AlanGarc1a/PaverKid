import styled from "styled-components";
import patio from "../../assets/patio.jpg";
import Container from "../Container";
import { Grid, Col } from "../Grid";
import { Text, GreenText } from "../Text";

const Intro = styled.section`
  background-color: var(--lightGray);
  padding: 5rem 2rem;
`;

const AboutHeading = styled.h2`
  text-transform: uppercase;
  font-size: 4rem;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: baseline;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const About = () => {
  return (
    <Intro id="about">
      <Container>
        <Grid>
          <Col>
            <ImgContainer>
              <Img src={patio} alt="patio" />
            </ImgContainer>
          </Col>
          <Col>
            <AboutHeading>
              Who Are <GreenText>We</GreenText>?
            </AboutHeading>
            <Text>
              We believe that your outdoor space should be an extension of your
              home and a reflection of your personal style. That's why we offer
              a wide variety of high-quality pavers that can transform your
              backyard, patio, driveway, or pool deck into a beautiful and
              functional oasis. Our team of experienced professionals is
              dedicated to providing exceptional service and craftsmanship, from
              the initial consultation to the final installation. Whether you're
              looking for a sleek and modern look or a more traditional style,
              we have the perfect pavers to fit your vision and budget.
            </Text>
          </Col>
        </Grid>
      </Container>
    </Intro>
  );
};

export default About;
