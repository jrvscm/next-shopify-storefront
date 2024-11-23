import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Base'; // Assuming Container is pre-defined for layout

const BannerWrapper = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const BannerTitle = styled.h2`
  font-family: var(--font-poppins), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

const BannerSubtitle = styled.p`
  font-family: var(--font-roboto), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
`;

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string; // Optional background color
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundColor }) => (
  <BannerWrapper backgroundColor={backgroundColor}>
    <Container>
      <BannerContent>
        <BannerTitle>{title}</BannerTitle>
        {subtitle && <BannerSubtitle>{subtitle}</BannerSubtitle>}
      </BannerContent>
    </Container>
  </BannerWrapper>
);

export default Banner;
