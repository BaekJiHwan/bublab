import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  margin-left: 100px;
  margin-top: 100px;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  max-height: 400px;
  overflow-y: auto;
`;

const Message = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  background-color: ${props => props.isUser ? '#333333' : '#222'};
  color: white;
  padding: 16px 24px;
  border-radius: 28px;
  max-width: 80%;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledTextarea = styled.textarea`
  flex: 1;
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

const SendButton = styled.button`
  padding: 16px 16px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 28px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #444444;
  }
`;

interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      // 사용자 메시지 추가
      setMessages([...messages, { text: inputValue, isUser: true }]);
      
      // AI 응답 추가 (임시 응답)
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "안녕하세요! 저는 AI 어시스턴트입니다. 어떻게 도와드릴까요?", 
          isUser: false 
        }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            <MessageBubble isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <StyledTextarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요..."
          rows={1}
        />
        <SendButton onClick={handleSend}>전송</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatInterface; 