import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../utils/Media';

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeWrapper = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    gap: 0; 
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.primary};

    ${media.sm}{
       padding: ${({ theme }) => theme.spacing.lg};
    } 
`;

const MarqueeContent = styled.div<{ duration: number }>`
    display: flex;
    gap: 60px;
    animation: ${marquee} ${({ duration }) => duration}s linear infinite;
    flex-shrink: 0;
    min-width: 100vw;
    padding-right: 60px;

    ${media.sm}{
        gap: ${({ theme }) => theme.spacing.lg};
        padding-right: ${({ theme }) => theme.spacing.lg};
    }   
`;

const MarqueeItem = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    text-align: center;
    margin: 2px;
`;

const Image = styled.img`
  max-width: 120px;
  width: 100%;
  object-fit: contain;

  ${media.sm} {
      max-width: 60px;
  }
`;

const Brands: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const duration = 35;

  return (
    <MarqueeWrapper>
      <MarqueeContent ref={marqueeRef} duration={duration}>
        <MarqueeItem>
          <Image src="/images/brand10.svg" alt="Brand 10" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand8.svg" alt="Brand 8" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand7.svg" alt="Brand 7" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand6.svg" alt="Brand 6" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand5.svg" alt="Brand 5" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand4.svg" alt="Brand 4" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand3.svg" alt="Brand 3" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand2.svg" alt="Brand 2" />
        </MarqueeItem>
      </MarqueeContent>
      {/* Duplicate content for seamless scrolling */}
      <MarqueeContent duration={duration}>
        <MarqueeItem>
          <Image src="/images/brand10.svg" alt="Brand 10" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand8.svg" alt="Brand 8" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand7.svg" alt="Brand 7" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand6.svg" alt="Brand 6" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand5.svg" alt="Brand 5" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand4.svg" alt="Brand 4" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand3.svg" alt="Brand 3" />
        </MarqueeItem>
        <MarqueeItem>
          <Image src="/images/brand2.svg" alt="Brand 2" />
        </MarqueeItem>
      </MarqueeContent>
    </MarqueeWrapper>
  );
};

export default Brands;
