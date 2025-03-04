
// "use client";

// import { useEffect, useState } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "300px"
// };

// export default function MapWithUserLocation() {
//   const [location, setLocation] = useState(null);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   // get location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           });
//         },
//         (error) => console.error("Geolocation error:", error)
//       );
//     }
//   }, []);


  // show map
//   return (
//     <div style={{ width: "100%", height: "300px" }}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={location || { lat: 37.7749, lng: -122.4194 }}
//         zoom={10}
//       >
//         {location && <Marker position={location} />}
//       </GoogleMap>
//     </div>
//   );
// }