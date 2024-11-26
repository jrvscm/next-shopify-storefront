import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { HR, Container } from '../styles/Base';
import { media } from '../utils/Media';
import { theme } from '../styles/Theme';
import { fetchFeatureFlags } from '../utils/contentful';
import { MdAccountCircle } from 'react-icons/md'; 
import { FiShoppingCart } from 'react-icons/fi';
import Banner from '../components/Banner';

const HeaderWrapper = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
`;

const Logo = styled.div`
  font-family: var(--font-poppins), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  z-index: 6;
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
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${media.md} {
    display: none; /* Hide links on medium and smaller screens */
  }
`;

const CartButton = styled.div`
  font-family: var(--font-roboto), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.md} {
    margin-left: auto;
    margin-right: ${({ theme }) => theme.spacing.md};
  }

  z-index: 6; /* Ensure cart button stays above the mobile menu */
`;

const HamburgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  z-index: 6; /* Ensure hamburger menu stays above the mobile menu */

  span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px 0;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translateY(10px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translateY(-10px)' : 'none')};
    }
  }

  ${media.md} {
    display: block; /* Show hamburger menu on medium and smaller screens */
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean, $hasBanner: boolean, $bannerHeight: number }>`
  position: fixed;
  top: ${({ $hasBanner, $bannerHeight }) =>  $hasBanner && $bannerHeight && `${$bannerHeight}px` || 0};
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 4; /* Below the navigation bar */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};

  a {
    font-family: var(--font-roboto), sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  /* Add padding to ensure links don’t overlap with the header */
  padding-top: 120px; 
`;

const StyledHR = styled(HR)`
  margin: 0;
`;

const IconButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: 6; /* Ensure this stays above the mobile menu */

  ${media.md}{
    margin-left: auto;
    margin-right: ${({ theme }) => theme.spacing.md};
  }
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [bannerData, setBannerData] = useState<any>(null);
  const [hasBanner, setHasBanner] = useState(false);
  const { asPath } = useRouter();
  const bannerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const featureFlags = await fetchFeatureFlags();
        const banner = featureFlags.find((flag) => flag.enabled && flag?.featureData?.type === 'promotionalBanner');
        const { featureData = {} } = banner;
        if(featureData?.name && featureData?.pageSlug === '*' || featureData.pageSlug === asPath) {
          setBannerData(featureData);
          setHasBanner(true);
        }
      } catch (error) {
        console.error('Error fetching feature flags:', error);
      }
    };

    fetchBanner();
  }, []);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, [bannerData]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      {hasBanner && <div ref={bannerRef}><Banner backgroundColor={theme.colors.secondary} subtitle={bannerData.subtitle} /></div>}
      <Container>
        <Nav>
          <Logo>brand</Logo>
          <NavLinks>
            <a href="#science">Science</a>
            <a href="#quiz">Quiz</a>
            <a href="#bundles">Bundles</a>
            <a href="#supplements">Supplements</a>
            <a href="#shop">Shop</a>
          </NavLinks>
          <IconButtonGroup>
            <IconButton>
              <FiShoppingCart aria-label="Cart" />
            </IconButton>
            <IconButton>
              <MdAccountCircle aria-label="Account" />
            </IconButton>
          </IconButtonGroup>
          <HamburgerMenu isOpen={menuOpen} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </Nav>
        <StyledHR color="white" opacity=".3" />
      </Container>
      <MobileMenu isOpen={menuOpen} $hasBanner={hasBanner} $bannerHeight={bannerHeight}>
        <a href="#science" onClick={toggleMenu}>Science</a>
        <a href="#quiz" onClick={toggleMenu}>Quiz</a>
        <a href="#bundles" onClick={toggleMenu}>Bundles</a>
        <a href="#supplements" onClick={toggleMenu}>Supplements</a>
        <a href="#shop" onClick={toggleMenu}>Shop</a>
        <a href="#account" onClick={toggleMenu}>Account</a>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
