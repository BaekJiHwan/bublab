import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #111;
  padding: 1rem;
  height: 44px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Logo = styled.div`
  margin-right: 2rem;
  img {
    height: 62px;
    width: auto;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Pretendard', sans-serif;
    &:hover {
      color: #61dafb;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="/Bublab Logo.png" alt="Bublab Logo" />
        </Link>
      </Logo>
      <NavList>
        
      </NavList>
    </Nav>
  );
};

export default Navbar; 