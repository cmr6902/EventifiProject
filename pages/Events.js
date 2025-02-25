import Navbar from '@/components/Dashboard/Navbar';
import React from 'react';
import styled from 'styled-components';

const Events = () => {
  return (
    <EventsSection>
      <Navbar/>
      <Title>See What Events Look Like</Title>
      <EventsContainer>
        <EventBlock>
          <EventDetails>
            <h3>Yoga Session</h3>
            <EventDescription>
              <p className="eventLoc">JJ's Yoga Studio</p>
              <p id="desc">3 Johnsville Rd</p>
            </EventDescription>
            <CardFeatures>
              <des>Description</des>
              <ul>
                <li>Instructor: John Black</li>
                <li>Difficulty: Advanced</li>
                <li>Movements include downward-facing dog, cow face, bridge pose</li>
              </ul>
            </CardFeatures>
          </EventDetails>
        </EventBlock>

        <EventBlock>
          <EventDetails>
            <h3>PickleBall Intermediate Play</h3>
            <EventDescription>
              <p className="eventLoc">Hollywood Church</p>
              <p id="desc">114 Peach St</p>
            </EventDescription>
            <CardFeatures>
              <des>Description</des>
              <ul>
                <li>Number of Courts: 5</li>
                <li>All ages welcome</li>
                <li>Intermediate to Advanced level</li>
              </ul>
            </CardFeatures>
          </EventDetails>
        </EventBlock>

        <EventBlock>
          <EventDetails>
            <h3>Wine Tasting</h3>
            <EventDescription>
              <p className="eventLoc">Hawk Wine Yard</p>
              <p id="desc">3218 Wine Blvd</p>
            </EventDescription>
            <CardFeatures>
              <des>Description</des>
              <ul>
                <li>Ages 21+ welcome</li>
                <li>ID is required to enter</li>
                <li>Try our many types of red and white wine available</li>
              </ul>
            </CardFeatures>
          </EventDetails>
        </EventBlock>
      </EventsContainer>
    </EventsSection>
  );
};

// Styled Components
const EventsSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background-color: #141414;
  margin-top: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
color: white;
margin-bottom: 30px;
font-size: 4rem;
`

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  min-height: 70vh;
`;

const EventBlock = styled.div`
  width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  color: black;
`;

const EventDetails = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
  }
`;

const EventDescription = styled.div`
  .eventLoc {
    font-weight: bold;
  }
`;

const CardFeatures = styled.div`
  text-align: left;

  des {
    font-weight: bold;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

export default Events;