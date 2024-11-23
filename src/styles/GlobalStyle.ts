// components/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-roboto), sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-poppins), sans-serif;
    margin: 0;
  }

  button {
    font-family: var(--font-roboto), sans-serif;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-family: var(--font-roboto), sans-serif;
  }
`;
