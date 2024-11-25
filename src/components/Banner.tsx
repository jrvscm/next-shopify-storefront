import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Base';

const BannerWrapper = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
`;

const BannerContent = styled.div<{ color?: string}>`
  text-align: center;
  color: ${({ theme, color }) => color || theme.colors.text};
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
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  color?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundColor, color }) => (
  <BannerWrapper backgroundColor={backgroundColor}>
    <Container>
      <BannerContent color={color}>
        {title && <BannerTitle>{title}</BannerTitle>}
        {subtitle && <BannerSubtitle>{subtitle}</BannerSubtitle>}
      </BannerContent>
    </Container>
  </BannerWrapper>
);

export default Banner;
