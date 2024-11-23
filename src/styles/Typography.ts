// components/styles/Typography.ts
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Props for Typography
interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'; // Tag type
  size?: keyof DefaultTheme['fontSizes']; // Font size from theme
  weight?: keyof DefaultTheme['fontWeights']; // Font weight from theme
  color?: string; // Optional color override
  align?: 'left' | 'center' | 'right' | 'justify'; // Text alignment
  lineHeight?: string; // Optional custom line height
}

// Base Typography Component
export const Typography = styled.div<TypographyProps>`
  font-family: ${({ theme, as = 'p' }) =>
    as.startsWith('h') ? 'var(--font-poppins)' : 'var(--font-roboto)'};
  font-size: ${({ theme, size = 'md' }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = 'regular' }) => theme.fontWeights[weight]};
  color: ${({ color, theme }) => color || theme.colors.text};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  margin: 0;
`;

// Heading Component
export const Heading = styled(Typography).attrs(() => ({
  as: 'h1',
}))<{
  color?: keyof DefaultTheme['colors'];
}>`
  font-size: ${({ theme, size = 'xxxl' }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = 'extraBold' }) => theme.fontWeights[weight]};
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
`;

// Subheading Component
export const Subheading = styled(Typography).attrs(() => ({
  as: 'h2',
}))<{
  color?: keyof DefaultTheme['colors'];
}>`
  font-size: ${({ theme, size = 'xl' }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = 'medium' }) => theme.fontWeights[weight]};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
`;

// Body Text Component
export const Text = styled(Typography).attrs(() => ({
  as: 'p',
}))<{
  color?: keyof DefaultTheme['colors'];
}>`
  font-size: ${({ theme, size = 'md' }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = 'regular' }) => theme.fontWeights[weight]};
  line-height: 1.5;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
`;

// Small Text Component
export const SmallText = styled(Typography).attrs(() => ({
  as: 'span',
}))<{
  color?: keyof DefaultTheme['colors'];
}>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme, weight = 'regular' }) => theme.fontWeights[weight]};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
`;

// Link Text Component
export const LinkText = styled(Typography).attrs(() => ({
  as: 'a',
}))<{
  color?: keyof DefaultTheme['colors'];
}>`
  font-size: ${({ theme, size = 'md' }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = 'medium' }) => theme.fontWeights[weight]};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;
