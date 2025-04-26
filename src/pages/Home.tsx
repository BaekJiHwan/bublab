import React from 'react';
import styled from 'styled-components';
import ChatFlow from '../components/ChatFlow';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f1f1f1;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Pretendard', sans-serif;
`;

const Description = styled.p`
  color: #ababab;
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Pretendard', sans-serif;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ChatFlow />
    </HomeContainer>
  );
};

export default Home; 