import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  color: #444;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Section>
        <SubTitle>Our Mission</SubTitle>
        <Text>
          We are dedicated to creating innovative web solutions that help businesses
          and individuals achieve their goals through modern technology.
        </Text>
      </Section>
      <Section>
        <SubTitle>Our Team</SubTitle>
        <Text>
          Our team consists of passionate developers and designers who are committed
          to delivering high-quality products and exceptional user experiences.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About; 