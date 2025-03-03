import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    // {user ?} for when user is signed in
    <Nav role="navigation" aria-label="Main Navigation">
      <NavContainer>
        {/* Logo with Logout Function */}
        <Logo onClick={() => logOut(setUser)} href="/">Eventifi</Logo>

        {/* Home Component */}
        {/* <Home /> */}

        {/* links */}
        <NavMenu>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Events">Events</NavLink>
          </NavItem>
        </NavMenu>

        {/* signup login */}
        <NavLinks>
          <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
          <ButtonLink href="/auth/login">Login</ButtonLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
width: 100%;
position: fixed;
top: 0;
left: 0;
background: black;
z-index: 1000;
padding: 0 50px;
height: 80px;
display: flex;
align-items: center;
`;

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

const Logo = styled(Link)`
font-size: 2rem;
  color: orangered;
  text-decoration: none;
  cursor: pointer;
`;

const NavMenu = styled.ul`
display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
`
const NavItem = styled.li`
height: 80px;
`

const NavLink = styled(Link)`
display: flex;
align-items: center;
color: white;
text-decoration: none;
height: 100%;
padding: 0 1rem;
cursor: pointer;

&:hover {
  color: green;
  transition: all 0.5s ease;
}
`;

const ButtonLink = styled(Link)`
display: flex;
align-items: center;
background: orangered;
color: white;
padding: 10px 20px;
border: none;
text-decoration: none;
border-radius: 10px;
cursor: pointer;
margin: 10px;


&:hover {
  background: green;
  transition: all 0.5s ease;
}
`;

const NavLinks = styled.div`
display: flex;
align-items: center;
`

export default Navbar;
