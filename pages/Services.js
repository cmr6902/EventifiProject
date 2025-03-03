import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Dashboard/Navbar';

const Services = () => {
  return (
    <>
    {/* <script src="https://kit.fontawesome.com/YOUR_KIT_CODE.js" crossorigin="anonymous"></script> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <ServicesSection>
      <Navbar/>
      <Title>What Do We Do</Title>
      <IntroText>
        See or post events in your area and create lifelong relationships while living an involved life.
      </IntroText>
      <FeaturesContainer>
        <Feature>
          <i className="fa-solid fa-lock icon"></i>
          <h3>Secured Events</h3>
          <p>For a safer experience, all users must create an account to view and share events within the community.</p>
        </Feature>
        <Feature>
          <i className="fa-solid fa-book icon"></i>
          <h3>Post Events</h3>
          <p>Easily share events happening in your area, allowing others to discover and participate.</p>
        </Feature>
        <Feature>
          <i className="fa-solid fa-users-viewfinder icon"></i>
          <h3>View Events</h3>
          <p>Explore events near you, posted by others, and find exciting activities to join.</p>
        </Feature>
        <Feature>
          <i className="fa-solid fa-heart icon"></i>
          <h3>Create Relationships</h3>
          <p>Connect with new people, build lasting relationships, and make memorable experiences.</p>
        </Feature>
      </FeaturesContainer>
    </ServicesSection>
    </>
  );
};

// Styled Components
const ServicesSection = styled.section`
  background-color: orangered;
  padding: 140px 20px;
  text-align: center;

`;

const Title = styled.h2`
color:white;
font-size: 5rem;
margin-bottom: 30px;
`;


const IntroText = styled.p`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  margin-top:-10px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const Feature = styled.div`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  margin-top: 20px;

  .icon {
    color: yellow;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.75rem;
    line-height: 1.5;
  }
`;

export default Services;