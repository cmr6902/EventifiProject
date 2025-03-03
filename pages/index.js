import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"
import RotatingBar from "@/components/LandingPage/RotatingBar"
import Services from "@/pages/Services"
import Events from "@/pages/Events"
import UserLocation from "@/components/UserLocation";
import MapWithUserLocation from "@/components/MapWithUserLocation";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <RotatingBar/>
        <Services/>
        <RotatingBar/>
        <Events/>
        <Footer />
        <UserLocation />
        <MapWithUserLocation />
    </>
  )
}


