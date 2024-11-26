import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, PillButton } from '../styles/Base';
import { Subheading, Text } from '../styles/Typography';
import { media } from '../utils/Media';

const FullWidthContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  max-width: unset;
  background: linear-gradient(
    to top right,
    ${({ theme }) => theme.colors.primary}CC,
    ${({ theme }) => theme.colors.primary}
  );
  ${media.md} {
    padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  }
`;

const StyledContainer = styled(Container)`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 1200px;

  ${media.md} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;
    padding: ${({ theme }) => `${theme.spacing.md}`};
  }
`;

const ContentWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.md} {
    max-width: 100%;
  }
`;

const TimerWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;

  ${media.md} {
    width: 20rem;
    height: 20rem;
  }
`;

const CircularBackground = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.secondary};
  stroke-width: 2;
  opacity: 0.2;
`;

const CircularProgress = styled.circle<{ percentage: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.colors.secondary};
  stroke-width: 2;
  stroke-dasharray: ${({ percentage }) => `${(percentage / 100) * 283} 283`};
  stroke-dashoffset: 0;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 60ms ease-out;
`;

const TimerValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledPillButton = styled(PillButton)`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.md};
  height: 48px;

  ${media.md} {
    width: 100%;
  }
`;

const StyledSubheading = styled(Subheading)`
  ${media.md}{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const StyledText = styled(Text)`
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const AnimatedSection = ({
  title,
  description,
  buttonText,
  percentage = 62,
  duration = 2000,
  onButtonClick,
  isDesktop
}: {
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  percentage?: number; // Percentage for the timer
  duration?: number; // Animation duration in milliseconds
  onButtonClick?: () => void;
  isDesktop?: boolean;
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = percentage / (duration / 50); // Increment step
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return nextValue;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage, duration]);

  return (
    <FullWidthContainer ref={sectionRef}>
      <StyledContainer>
        {/* Left Content */}
        <ContentWrapper>
          <StyledSubheading size="xxxl">{title}</StyledSubheading>
          <StyledText size="lg" weight="light">{description}</StyledText>
          {isDesktop && (<StyledPillButton variant="tertiary" onClick={onButtonClick}>
            {buttonText}
          </StyledPillButton>)}
        </ContentWrapper>

        {/* Timer Section */}
        <TimerWrapper>
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            {/* Background Circle */}
            <CircularBackground cx="50" cy="50" r="45" />
            {/* Progress Circle */}
            <CircularProgress
              cx="50"
              cy="50"
              r="45"
              percentage={currentPercentage}
            />
          </svg>
          {/* Timer Value */}
          <TimerValue>{currentPercentage.toFixed(0)}%</TimerValue>
        </TimerWrapper>
            {!isDesktop && (<StyledPillButton variant="tertiary" onClick={onButtonClick}>
                {buttonText}
            </StyledPillButton>)}
      </StyledContainer>
    </FullWidthContainer>
  );
};

export default AnimatedSection;
