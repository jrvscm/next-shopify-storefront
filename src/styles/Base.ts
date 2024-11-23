// components/styles/Base.ts
import styled, { DefaultTheme } from 'styled-components';
import { media } from '../utils/Media';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  ${media.sm} {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const Flex = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  gap?: string;
  width?: string;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
  width: ${({ width }) => width || '100%'};

  /* Responsive flex-direction change */
  ${media.sm} {
    flex-direction: column; /* Switch to column for small screens */
  }
`;

export const Button = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  filter: ${({ variant, theme }) =>
    variant === 'secondary' ? 'none' : 'brightness(85%)'};

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.secondary : theme.colors.white};
    color: ${({ variant, theme }) =>
      variant === 'secondary' ? theme.colors.primary : theme.colors.primary};
    filter: ${({ variant, theme }) =>
      variant === 'secondary' ? 'none' : 'brightness(100%)'};
  }

  & > * {
    cursor: inherit; /* Ensure child elements inherit the cursor style */
  }

  @media (max-width: 768px) {
    // font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

// Pill-style Button
export const PillButton = styled(Button)`
  border-radius: 50px; /* Full-rounded edges for pill style */
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`}; /* Extra horizontal padding for a pill look */
  cursor: pointer;
  filter: ${({ variant, theme }) =>
    variant === 'secondary' ? 'none' : 'brightness(85%)'};
  font-size: 18px;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.primary : theme.colors.white};
    color: ${({ variant, theme }) =>
      variant === 'secondary' ? theme.colors.primary : theme.colors.white};
    filter: ${({ variant, theme }) =>
      variant === 'secondary' ? 'none' : 'brightness(100%)'};
  }

  & > * {
    cursor: inherit; /* Ensure child elements inherit the cursor style */
  }

  @media (max-width: 768px) {
    // font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  }
`;

export const Heading = styled.h1<{ size?: 'large' | 'medium' | 'small' }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ size, theme }) =>
    size === 'large' ? '3rem' : size === 'medium' ? '2rem' : '1.5rem'};
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: ${({ size }) =>
      size === 'large' ? '2rem' : size === 'medium' ? '1.5rem' : '1.25rem'};
  }
`;

export const Subheading = styled.p<{ size?: 'large' | 'small' }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ size }) => (size === 'large' ? '1.25rem' : '1rem')};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ size }) => (size === 'large' ? '1rem' : '0.875rem')};
  }
`;

export const Text = styled.p<{ color?: string }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ color, theme }) => color || theme.colors.text};
  line-height: 1.5;
  margin: 0;
`;

export const HR = styled.hr<{
  color?: keyof DefaultTheme['colors'];
  marginTop?: string;
  marginBottom?: string;
  opacity?: number;
}>`
  border: none;
  border-top: 1px solid
    ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
  margin-top: ${({ marginTop }) => marginTop || '16px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '16px'};
  opacity: ${({ opacity }) => opacity ?? 1};
  width: 100%; /* Ensures it spans the full width by default */
`;