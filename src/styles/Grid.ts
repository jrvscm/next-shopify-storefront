import styled from 'styled-components';
import { media } from '../utils/Media'; // Import media query helpers

// Grid Wrapper
export const Grid = styled.div<{
  columns?: string;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || 'repeat(12, 1fr)'};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
  width: 100%;

  ${media.md} {
    grid-template-columns: repeat(6, 1fr); /* 6 columns for medium screens */
  }

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for small screens */
  }

  ${media.xs} {
    grid-template-columns: 1fr; /* Stack items on extra-small screens */
  }
`;

// Grid Item
export const GridItem = styled.div<{
  columnSpan?: string;
  display?: string;
  order?: number; // Add order property
}>`
  grid-column: ${({ columnSpan }) => columnSpan || 'span 12'};
  display: ${({ display }) => display || 'content'};
  order: ${({ order }) => order || 0}; /* Default order */

  ${media.md} {
    grid-column: ${({ columnSpan }) => columnSpan || 'span 6'}; /* Adjust span for medium screens */
    order: ${({ order }) => (order === 1 ? 2 : 1)}; /* Reverse order for small screens */
  }

  ${media.sm} {
    grid-column: ${({ columnSpan }) => columnSpan || 'span 2'}; /* Adjust span for small screens */
    order: ${({ order }) => (order === 1 ? 2 : 1)}; /* Reverse order for small screens */
  }

  ${media.xs} {
    grid-column: span 1; /* Full-width on extra-small screens */
    order: ${({ order }) => (order === 1 ? 2 : 1)}; /* Reverse order for extra-small screens */
  }
`;

