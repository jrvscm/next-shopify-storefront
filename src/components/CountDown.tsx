import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../utils/Media';
const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  width: 340px;
  height: 340px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.2),
    0 0 15px ${({ theme }) => theme.colors.primary},
    0 0 30px ${({ theme }) => theme.colors.primary};
  z-index: 1;

  
`;

const Ring = styled.span<{ position: number }>`
  position: absolute;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 340px;
  height: 340px;
  pointer-events: none;
  transform: scale(${({ position }) => {
    const baseScale = 1; // Base scale for the innermost ring
    const scaleIncrement = 0.15; // Increment for each ring
    return baseScale + position * scaleIncrement;
  }});
  opacity: ${({ position }) =>
    position === 0
      ? 0.75
      : position === 1
      ? 0.6
      : position === 2
      ? 0.4
      : position === 3
      ? 0.2
      : 0};
  visibility: ${({ position }) => (position === -1 || position === 0 ? 'hidden' : 'visible')};
  transition: ${({ position }) =>
    position === -1
      ? 'none'
      : 'opacity 1.5s cubic-bezier(0.5, 0, 0, 1), transform 1s cubic-bezier(0.5, 0, 0, 1)'};
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const TimerText = styled.div`
  font-family: var(--font-roboto), sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`;

const TimerValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerValue = styled.div`
  font-family: var(--font-poppins), sans-serif;
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

const DownArrow = styled.svg`
  margin-top: 16px;
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Timer = () => {
  const [timerValue, setTimerValue] = useState(41);
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [ringPositions, setRingPositions] = useState<number[]>([0, 1, 2, 3, -1]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimerValue((prevValue) => {
        if (isCountingDown) {
          if (prevValue > 35) return prevValue - 1;
          setIsCountingDown(false);
          return prevValue;
        } else {
          if (prevValue < 41) return prevValue + 1;
          setIsCountingDown(true);
          return prevValue;
        }
      });
  
      // Update ring positions with modulo logic
      setRingPositions((prevPositions) => {
        const newPositions = prevPositions.map((pos) => (pos + 1) % 5); // Cycle positions smoothly
        return newPositions;
      });
    }, 900);
  
    return () => clearInterval(timerInterval);
  }, [isCountingDown]);

  return (
    <OuterWrapper>
      {ringPositions.map((position, index) => (
        <Ring key={index} position={position} />
      ))}
      <TimerWrapper />
      <TextWrapper>
        <TimerText>Lower your<br />epigenetic age</TimerText>
        <TimerValueWrapper>
          <TimerValue>{timerValue}</TimerValue>
          <DownArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 15.6l-5.4-5.4 1.4-1.4L12 12.8l4-4.2 1.4 1.4-5.4 5.6z" />
          </DownArrow>
        </TimerValueWrapper>
      </TextWrapper>
    </OuterWrapper>
  );
};

export default Timer;
