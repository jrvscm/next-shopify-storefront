// components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import { HR } from '../styles/Base';

const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: var(--font-poppins), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};

  a {
    font-family: var(--font-roboto), sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CartButton = styled.div`
  font-family: var(--font-roboto), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transition: color .2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Container>
      <Nav>
        <Logo>tally</Logo>
        <NavLinks>
          <a href="#science">Science</a>
          <a href="#quiz">Quiz</a>
          <a href="#bundles">Bundles</a>
          <a href="#supplements">Supplements</a>
          <a href="#shop">Shop</a>
        </NavLinks>
        <CartButton>Cart</CartButton>
      </Nav>
      <HR color="white" opacity=".3" />
    </Container>
  </HeaderWrapper>
);

export default Header;
