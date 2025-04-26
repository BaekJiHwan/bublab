import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImageUploadIcon from '../assets/icons/image.svg';
import FileUploadIcon from '../assets/icons/Attachment.svg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 100px;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #222;
  border-radius: 28px;
  padding: 20px;
  min-width: 600px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  padding: 20px;
`;

const Message = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  background-color: ${props => props.isUser ? '#333333' : '#444'};
  color: white;
  padding: 12px 20px;
  border-radius: 14px;
  max-width: 80%;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px;
  background-color: #222;
  border-radius: 28px;
`;

const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageUploadButton = styled.button`
  position: absolute;
  left: 32px;
  top: 47%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  &::after {
    content: '+';
    font-size: 28px;
    display: block;
    line-height: 1;
    margin-bottom: 4px;
  }
`;

const UploadMenu = styled.div`
  position: absolute;
  left: 32px;
  bottom: 70px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  background: #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -6px;
`;

const UploadMenuItem = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MenuItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -4px;
  gap: 4px;
`;

const SubText = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 60px;
  min-height: 60px;
  max-height: 200px;
  padding: 16px 24px;
  padding-left: 68px;
  padding-right: 68px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.5;
  resize: none;
  overflow-y: hidden;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ScrollbarContainer = styled.div`
  position: absolute;
  right: 50px;
  top: 16px;
  bottom: 16px;
  width: 6px;
  background: transparent;
  overflow: hidden;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 32px;
  top: -2px;
  bottom: 0px;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: 0;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease;
  z-index: 1;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #dbdbdb;
  }
  
  &::after {
    content: '→';
    font-size: 20px;
    display: block;
    line-height: 10;
    color: black;
    margin-top: -2px;
  }
`;

const FlowChartContainer = styled.div`
  width: 300px;
  background-color: #222;
  border-radius: 28px;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  max-height: 600px;
`;

const MessageNode = styled.div<{ isUser: boolean }>`
  position: relative;
  padding: 12px;
  background-color: ${props => props.isUser ? '#333333' : '#444'};
  border-radius: 14px;
  color: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  margin-bottom: 8px;
  border: 1px solid ${props => props.isUser ? '#61dafb' : '#666'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 2px;
    height: 8px;
    background-color: #444;
    transform: translateX(-50%);
  }

  &:last-child::after {
    display: none;
  }
`;

const MessageContent = styled.div`
  word-break: break-all;
  line-height: 1.4;
`;

const MessageTime = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
  text-align: right;
`;

const FixedInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

interface Message {
  text: string;
  isUser: boolean;
}

interface Conversation {
  id: number;
  messages: Message[];
  summary: string;
  timestamp: string;
}

const ChatFlow: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    { 
      id: 1, 
      messages: [], 
      summary: '새 대화',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [currentConversationId, setCurrentConversationId] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentConversation = conversations.find(conv => conv.id === currentConversationId);

  const handleSend = () => {
    if (inputValue.trim() && currentConversation) {
      const newMessage: Message = { text: inputValue, isUser: true };
      const updatedConversations = conversations.map(conv => {
        if (conv.id === currentConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, newMessage],
            summary: inputValue.slice(0, 30) + '...',
            timestamp: new Date().toLocaleTimeString()
          };
        }
        return conv;
      });
      setConversations(updatedConversations);
      
      // AI 응답 추가 (임시)
      setTimeout(() => {
        const aiResponse: Message = { 
          text: "안녕하세요! 저는 AI 어시스턴트입니다. 어떻게 도와드릴까요?", 
          isUser: false 
        };
        setConversations(prev => prev.map(conv => {
          if (conv.id === currentConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, aiResponse]
            };
          }
          return conv;
        }));
      }, 1000);
      
      setInputValue('');
      // 텍스트 박스 높이를 원래 크기로 되돌리기
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.style.height = '60px';
      }
    }
  };

  const handleNewConversation = () => {
    const newId = Math.max(...conversations.map(conv => conv.id), 0) + 1;
    setConversations([...conversations, { 
      id: newId, 
      messages: [], 
      summary: '새 대화',
      timestamp: new Date().toLocaleTimeString()
    }]);
    setCurrentConversationId(newId);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const textarea = e.target;
    
    if (e.target.value.trim() === '') {
      // 입력이 없을 때 원래 크기로 돌아가기
      textarea.style.height = '60px';
    } else {
      // 입력이 있을 때 자동으로 높이 조절
      textarea.style.height = '60px';
      const newHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${newHeight}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = () => {
    // 이미지 업로드 처리 로직
    console.log('Image upload clicked');
    setIsUploadMenuOpen(false);
  };

  const handleFileUpload = () => {
    // 파일 업로드 처리 로직
    console.log('File upload clicked');
    setIsUploadMenuOpen(false);
  };

  // 컴포넌트 마운트 시 초기 높이 설정
  useEffect(() => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = '40px';
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUploadMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainContainer>
      <Container>
        <ChatContainer>
          <MessagesContainer>
            {currentConversation?.messages.map((message, index) => (
              <Message key={index} isUser={message.isUser}>
                <MessageBubble isUser={message.isUser}>
                  {message.text}
                </MessageBubble>
              </Message>
            ))}
          </MessagesContainer>
        </ChatContainer>
        <FlowChartContainer>
          {currentConversation?.messages.map((message, index) => (
            <MessageNode key={index} isUser={message.isUser}>
              <MessageContent>{message.text}</MessageContent>
              <MessageTime>
                {new Date().toLocaleTimeString()}
              </MessageTime>
            </MessageNode>
          ))}
        </FlowChartContainer>
      </Container>
      <FixedInputContainer>
        <InputWrapper>
          <ImageUploadButton onClick={() => setIsUploadMenuOpen(!isUploadMenuOpen)} />
          {isUploadMenuOpen && (
            <UploadMenu ref={menuRef}>
              <UploadMenuItem onClick={handleImageUpload}>
                <IconWrapper>
                  <Icon src={ImageUploadIcon} alt="이미지 업로드" />
                </IconWrapper>
                <MenuItemContent>
                  <span>이미지 업로드</span>
                  <SubText>이미지를 넣어 질문 해보세요</SubText>
                </MenuItemContent>
              </UploadMenuItem>
              <UploadMenuItem onClick={handleFileUpload}>
                <IconWrapper>
                  <Icon src={FileUploadIcon} alt="파일 업로드" />
                </IconWrapper>
                <MenuItemContent>
                  <span>파일 업로드</span>
                  <SubText>파일을 업로드해 질문 해보세요</SubText>
                </MenuItemContent>
              </UploadMenuItem>
            </UploadMenu>
          )}
          <StyledTextarea
            value={inputValue}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="내용을 입력하세요..."
            rows={1}
          />
          <SendButton onClick={handleSend} />
        </InputWrapper>
      </FixedInputContainer>
    </MainContainer>
  );
};

export default ChatFlow; 