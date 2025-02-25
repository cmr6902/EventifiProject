import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import RotatingBar from './RotatingBar';

const Hero = ({text}) => {
  return (
<Section>
      {/* <Overlay> */}
        <Container>
          {/* left side */}
          <HeroTextColumn>
            <Header>
              See Events Near You
            </Header>
            <SubheaderAndCTA>
              <SubHeader>Post Events for Others to See</SubHeader>
              <SubHeader>Join Today and Meet New People</SubHeader>
              <CTAButton href="/auth/signup">Sign Up</CTAButton>
            </SubheaderAndCTA>
          </HeroTextColumn>

          {/* right side image*/}
          <HeroImage>
            <img src="/images/eventimg1.svg" alt="People at an event" />
          </HeroImage>
        </Container>
      {/* </Overlay> */}
    </Section>
    

  );
};

// Styled Components
const Section = styled.section`
  background-color: #141414;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
`;

const HeroTextColumn = styled.div`
  color: white;
  max-width: 600px;
`;

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: orangered;
  display: block;
  font-size: 2rem;
`;

const SubheaderAndCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubHeader = styled.p`
  font-size: 3rem;
  font-weight:Bold;
`;

const CTAButton = styled(Link)`
  background: orangered;
  color: white;
  padding: 20px 40px;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 100px;
  display: inline-block;
  width: fit-content;
  margin-top: 10px;

  &:hover {
    background: green;
    transition: all 0.3s ease-in-out;
  }
`;

const HeroImage = styled.div`
  img {
    max-width: 450px;
    height: auto;
  }
`;


export default Hero;
