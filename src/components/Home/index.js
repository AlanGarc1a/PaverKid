import styled from "styled-components";
import hero from "../../assets/hero.jpg";
import Button from "../Button";
import { AiOutlineInstagram } from "react-icons/ai";

const Hero = styled.section`
  height: 95vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1)
    ),
    url(${hero});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 30em) {
    width: 100%;
  }
`;

const HomeIntro = styled.span`
  display: block;
  font-size: 3.8rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);
  text-align: center;
`;

const HomeSub = styled.span`
  display: block;
  margin-top: 2rem;
  font-size: var(--defaultFontSize);
  word-wrap: break-word;
  white-space: normal;
  max-width: 100%;
  color: var(--white);
  font-weight: 700;
  text-align: center;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 6rem;
`;

const Home = () => {
  return (
    <Hero id="home">
      <HomeContent>
        <h1>
          <HomeIntro>Transform Your Outdoor Space</HomeIntro>
          <HomeSub>
            Whether you're looking to enhance your home's curb appeal or create
            an inviting patio space for entertaining, we have the skills and
            expertise to help you bring your vision to life.
          </HomeSub>
        </h1>
        <ButtonGroup>
          <Button
            type="secondary"
            href="https://www.instagram.com/paveitlandscape/"
          >
            Follow Us <AiOutlineInstagram size={20} />
          </Button>
        </ButtonGroup>
      </HomeContent>
    </Hero>
  );
};

export default Home;
