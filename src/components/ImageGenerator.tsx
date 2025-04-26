import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  margin-left: 100px;
  margin-top: 100px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #222;
  border-radius: 28px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PromptInput = styled.textarea`
  width: 100%;
  padding: 16px 24px;
  border: 1px solid #444;
  border-radius: 28px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  background-color: #222;
  color: white;
  resize: none;
  min-height: 60px;
  
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 28px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #444444;
  }
`;

const Icon = styled.span`
  font-size: 20px;
`;

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    // 이미지 생성 로직
    console.log('Generating image with prompt:', prompt);
  };

  const handleCopyPrompt = () => {
    // 프롬프트 복사 로직
    navigator.clipboard.writeText(prompt);
  };

  return (
    <Container>
      <ImageContainer>
        이미지가 여기에 표시됩니다
      </ImageContainer>
      <InputContainer>
        <PromptInput
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="이미지를 설명하는 텍스트를 입력하세요..."
          rows={2}
        />
        <ButtonContainer>
          <ActionButton onClick={handleGenerate}>
            <Icon>🎨</Icon>
            이미지 생성
          </ActionButton>
          <ActionButton onClick={handleCopyPrompt}>
            <Icon>📋</Icon>
            프롬프트 복사
          </ActionButton>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default ImageGenerator; 