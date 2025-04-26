import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 512px;
  height: 100px;

`;

const StyledTextarea = styled.textarea`
  flex: 1;
  padding: 40px 40px;
  border: 1px solid #444;
  border-radius: 28px;
  font-size: 20px;
  font-weight: Bold;
  font-family: 'Pretendard', sans-serif;
  background-color: #222;
  color: white;
  margin-right: 8px;
  resize: none;
  min-height: 100px;
  
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #444444;
  }
`;

const InputField: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', inputValue);
    // 여기에 제출 후 처리할 로직을 추가할 수 있습니다
  };

  return (
    <InputContainer>
      <StyledTextarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="텍스트를 입력하세요"
        rows={5}
      />
    </InputContainer>
  );
};

export default InputField; 