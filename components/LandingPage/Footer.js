import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} Eventifi
        </LeftContainer>
        <CenterContainer>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </CenterContainer>
        <RightContainer>
        <SocialIcon href="https://www.instagram.com" target = "blank" rel="noopener noreferrer">Instagram</SocialIcon>
        <SocialIcon href="https://x.com" target = "blank" rel="noopener noreferrer">Twitter</SocialIcon>
        <SocialIcon href="https://www.linkedin.com" target = "blank" rel="noopener noreferrer">LinkedIn</SocialIcon>
        <SocialIcon href="https://www.reddit.com" target = "blank" rel="noopener noreferrer">Reddit</SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
color: orangered;
background: black;
`;

const FooterContainer = styled.div`

`;

const LeftContainer = styled.div``;

const CenterContainer = styled.div``;

const RightContainer = styled.div`

`;

const Link = styled.a`

`;

const SocialIcon = styled.a`
  color: #007bff;
  padding: 30px;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

export default Footer;
