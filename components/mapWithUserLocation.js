
"use client";

import { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px"
};

export default function MapWithUserLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false); // Set loading to false once location is fetched
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false); // Set loading to false if there's an error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false); // Set loading to false if geolocation isn't supported
    }
  }, []);

  // Wait for Google Maps API and location to load
  if (!isLoaded || loading) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || { lat: 37.7749, lng: -122.4194 }} // Fallback to San Francisco
        zoom={10}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </div>
  );
}