

"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  // get cords
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false); 
    }
  }, []);

  return (
    <Section>
      <h2>Your Location</h2>
      {loading ? (
        <p>Getting location...</p> // mesage while loading
      ) : error ? (
        <p>Error: {error}</p> //if error
      ) : location ? (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p> // location cords
      ) : (
        <p>Unable to get location.</p> //if cords failed
      )}
    </Section>
  );
}

const Section = styled.section`
  background: #121212;
  color: white;
`;
