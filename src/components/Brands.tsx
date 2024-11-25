import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../utils/Media';
import { theme } from '../styles/Theme';

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeWrapper = styled.div<{ backgroundColor: string }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  gap: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ backgroundColor }) => backgroundColor};

  ${media.sm} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const MarqueeContent = styled.div<{ duration: number; gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  animation: ${marquee} ${({ duration }) => duration}s linear infinite;
  flex-shrink: 0;
  min-width: 100vw;
  padding-right: ${({ gap }) => `${gap}px`};

  ${media.sm} {
    gap: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
`;

const MarqueeItem = styled.div<{ $marqueeItemBackground: string }>`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-align: center;
  margin: 2px;
  background: ${({ $marqueeItemBackground, theme }) => $marqueeItemBackground || theme.colors.secondary};
`;

const Image = styled.img`
  max-width: 120px;
  width: 100%;
  object-fit: contain;

  ${media.sm} {
    max-width: 60px;
  }
`;

interface Brand {
  src: string;
  alt: string;
}

interface BrandsProps {
  brands: Brand[]; // Array of brand objects
  duration?: number; // Animation duration
  gap?: number; // Gap between items
  backgroundColor?: string; // Background color for marquee
  marqueeItemBackground?: string
}

const Brands: React.FC<BrandsProps> = ({
  brands,
  duration = 35,
  gap = 60,
  backgroundColor = theme.colors.primary,
  marqueeItemBackground = theme.colors.secondary
}) => {
  return (
    <MarqueeWrapper backgroundColor={backgroundColor}>
      {/* Primary Content */}
      <MarqueeContent duration={duration} gap={gap}>
        {brands.map((brand, index) => (
          <MarqueeItem $marqueeItemBackground={marqueeItemBackground} key={index}>
            <Image src={brand.src} alt={brand.alt} />
          </MarqueeItem>
        ))}
      </MarqueeContent>
      {/* Duplicate Content for Seamless Scrolling */}
      <MarqueeContent duration={duration} gap={gap}>
        {brands.map((brand, index) => (
          <MarqueeItem $marqueeItemBackground={marqueeItemBackground} key={`duplicate-${index}`}>
            <Image src={brand.src} alt={brand.alt} />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeWrapper>
  );
};

export default Brands;
