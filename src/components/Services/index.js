import styled from "styled-components";
import driveway from "../../assets/driveway.jpg";
import poolDeck from "../../assets/pool-deck.jpg";
import patio2 from "../../assets/patio2.jpg";
import turf from "../../assets/turf.jpg";
import { Text, GreenText } from "../Text";
import Container from "../Container";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = styled.section`
  padding: 10rem 0rem;
  background-color: var(--lightGray);
`;

const CarouselImgContent = styled.div`
  aspect-ratio: 2 / 1;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceTitle = styled.h3`
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const SliderContent = styled.div``;

const SliderBox = styled.div`
  margin-top: 2rem;
`;

const SlideTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Services = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Service id="services">
      <Container>
        <ServiceTitle>
          What we <GreenText>provide</GreenText>
          <AiOutlineArrowRight size={22} style={{ marginLeft: 10 }} />
        </ServiceTitle>
        <Slider {...settings}>
          <SliderContent>
            <CarouselImgContent>
              <CarouselImg src={driveway} alt="driveway" />
            </CarouselImgContent>
            <SliderBox>
              <SlideTitle>Driveways</SlideTitle>
              <Text>
                We have helped countless homeowners transform their ordinary
                driveways into stunning outdoor spaces that are both functional
                and aesthetically pleasing. Our skilled professionals use only
                the highest quality materials and state-of-the-art equipment to
                ensure that every project is completed to perfection. We offer a
                wide variety of paver styles and colors to choose from, so you
                can create a customized driveway that fits your home's unique
                style.
              </Text>
            </SliderBox>
          </SliderContent>
          <SliderContent>
            <CarouselImgContent>
              <CarouselImg src={poolDeck} alt="pool" />
            </CarouselImgContent>
            <SliderBox>
              <SlideTitle>Pool Deck</SlideTitle>
              <Text>
                We specialize in creating beautiful and functional pool decks
                that are both safe and stylish. Our team of experienced
                professionals is dedicated to providing the highest quality
                installation services, from start to finish. We work closely
                with our clients to ensure that their vision is brought to life,
                and we pride ourselves on our attention to detail and
                exceptional customer service. Whether you're looking to update
                your current pool deck or create a brand new space, we've got
                you covered.
              </Text>
            </SliderBox>
          </SliderContent>
          <SliderContent>
            <CarouselImgContent>
              <CarouselImg src={patio2} alt="patio" />
            </CarouselImgContent>
            <SliderBox>
              <SlideTitle>Patios</SlideTitle>
              <Text>
                We specialize in creating beautiful and functional custom patios
                for homeowners who want to transform their outdoor living
                spaces. With years of experience in the industry, our team of
                expert designers and skilled craftsmen work together to create
                unique and personalized patio designs that meet our clients'
                specific needs and preferences. From traditional to contemporary
                styles, we use only the highest quality materials and innovative
                techniques to ensure every project is built to last. Our goal is
                to help you create an outdoor oasis that you'll love spending
                time in for years to come.
              </Text>
            </SliderBox>
          </SliderContent>
          <SliderContent>
            <CarouselImgContent>
              <CarouselImg src={turf} alt="turf" />
            </CarouselImgContent>
            <SliderBox>
              <SlideTitle>Turf</SlideTitle>
              <Text>
                We are dedicated to helping our clients create the perfect
                outdoor space by providing high-quality and professional
                artificial turf installations. Our team of experienced
                installers is committed to delivering exceptional results that
                exceed our clients' expectations. With our state-of-the-art
                products and installation techniques, we provide a range of turf
                options that are both durable and low-maintenance, ensuring
                you'll enjoy a lush, green lawn all year round.
              </Text>
            </SliderBox>
          </SliderContent>
        </Slider>
      </Container>
    </Service>
  );
};

export default Services;
