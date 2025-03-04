

"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  // Get coordinates
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false); // Set loading to false once location is fetched
        },
        (error) => {
          setError(error.message);
          setLoading(false); // Set loading to false in case of error
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false); // Set loading to false if geolocation is not supported
    }
  }, []);

  return (
    <Section>
      <h2>Your Location</h2>
      {loading ? (
        <p>Getting location...</p> // Show loading message while fetching
      ) : error ? (
        <p>Error: {error}</p> // Show error message if any
      ) : location ? (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p> // Show location if available
      ) : (
        <p>Unable to get location.</p> // Fallback message if no location
      )}
    </Section>
  );
}

const Section = styled.section`
  background: #121212;
  color: white;
`;
