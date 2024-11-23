// components/styles/Container.ts
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px; /* Set the max-width of the site */
  margin: 0 auto; /* Center the container */
  padding: 0 ${({ theme }) => theme.spacing.md}; /* Add horizontal padding */
  
  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.sm}; /* Reduce padding on smaller screens */
  }
`;

export default Container;
