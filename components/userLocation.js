"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    // show cords
    <Section>
      <h2>Your Location</h2>
      {location ? (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Getting location...</p>
      )}
    </Section>
  );
}

const Section = styled.section`
background: #121212;
color: white;
`