import React, { useState, useEffect, ReactNode } from 'react';
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
        text-align: center;
        gap: 20px;
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
  width: 340px;
  height: 340px;
  margin: 0 auto;

  ${media.md} {
    width: 150px;
    height: 150px;
  }
`;

const CircularBackground = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.secondary};
  stroke-width: 8;
  opacity: 0.2;
`;

const CircularProgress = styled.circle<{ percentage: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.colors.secondary};
  stroke-width: 8;
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
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};

  ${media.md} {
    font-size: 2rem;
  }
`;

const StyledPillButton = styled(PillButton)`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.md};
  height: 48px;

  ${media.md} {
    width: 100%;
  }
`;

const AnimatedSection = ({
  title,
  description,
  buttonText,
  percentage = 62,
  duration = 2000,
  onButtonClick,
}: {
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  percentage?: number; // Percentage for the timer
  duration?: number; // Animation duration in milliseconds
  onButtonClick?: () => void;
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
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
  }, [percentage, duration]);

  return (
    <FullWidthContainer>
        <StyledContainer>
            {/* Left Content */}
            <ContentWrapper>
                <Subheading size="xxxl">{title}</Subheading>
                <Text size="lg">{description}</Text>
                <StyledPillButton variant="tertiary" onClick={onButtonClick}>
                {buttonText}
                </StyledPillButton>
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
        </StyledContainer>
    </FullWidthContainer>
  );
};

export default AnimatedSection;
