import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#f4f4f9',
    text: '#333',
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
};

export type ThemeType = typeof theme;
