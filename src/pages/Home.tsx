import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f1f1f1;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #ababab;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Our Website</Title>
      <Description>
        This is a modern React application built with TypeScript and styled-components.
        Feel free to explore and learn more about our project.
      </Description>
    </HomeContainer>
  );
};

export default Home; 