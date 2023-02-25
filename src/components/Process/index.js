import styled from "styled-components";
import Container from "../Container";
import { Grid } from "../Grid";

const ProcessContent = styled.section`
  background-image: linear-gradient(
    to bottom left,
    var(--primary),
    var(--white)
  );
  background-size: 250% 200%;
  background-position: top right;
  padding: 15rem 0;
`;

const ProcessItem = styled.div``;

const TextTitle = styled.h4`
  color: var(--white);
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const ProcessItemTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--white);
`;

const ProcessItemContent = styled.p`
  font-size: 1.6rem;
  color: var(--lightGray);
  width: 100%;
`;

const Process = () => {
  return (
    <ProcessContent>
      <Container>
        <TextTitle>What's the process?</TextTitle>
        <Grid>
          <ProcessItem>
            <ProcessItemTitle>1. Design</ProcessItemTitle>
            <ProcessItemContent>
              Our designers and installers will work closely with you to create
              your unique and customized paver solutions that complement the
              existing architecture and landscape of the property.
            </ProcessItemContent>
          </ProcessItem>
          <ProcessItem>
            <ProcessItemTitle>2. Plan</ProcessItemTitle>
            <ProcessItemContent>
              Our team will work with you to create a custom plan that meets
              your specific needs and preferences. From selecting the right
              materials and colors to designing a layout that complements your
              property's style and function, we pay close attention to every
              detail to ensure your complete satisfaction.
            </ProcessItemContent>
          </ProcessItem>
          <ProcessItem>
            <ProcessItemTitle>3. Install</ProcessItemTitle>
            <ProcessItemContent>
              Next, we’ll bring your vision to life through professional
              installation using premium paving stones and top-quality outdoor
              elements.
            </ProcessItemContent>
          </ProcessItem>
        </Grid>
      </Container>
    </ProcessContent>
  );
};

export default Process;
