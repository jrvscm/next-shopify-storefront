import React from 'react';
import styled from 'styled-components';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Heading, Subheading, Text } from '../styles/Typography';
import { PillButton, Flex, Container, HR } from '../styles/Base';
import { Grid, GridItem } from '../styles/Grid';
import { media } from '../utils/Media';

import CountDown from '../components/CountDown';

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StyledPillButton = styled(PillButton)`
  width: 50%;
  height: 48px;

  ${media.md} {
    width: 100%;
  }
`;

const StyledGridItem = styled(GridItem)`
  ${media.md} {
    margin: 150px auto 50px auto;
  }
`;

const HomePage: React.FC = () => (
  <>
    <BackgroundVideo
      videoSrc="/videos/hero-video.mp4"
      overlayColor="rgba(0, 0, 0, 0.6)"
      overlayOpacity={0.6}
      fallbackImage="/images/fallback.jpg"
    >
      <Container>
        <Grid columns="repeat(12, 1fr)">
          {/* Content Section */}
          <GridItem columnSpan="span 6" display="flex" order={1}>
            <Flex direction="column" justify="center" align="flex-start">
              <StyledHeading size="xxxl" weight="extraBold" color="white">
                Live healthier, longer
              </StyledHeading>
              <Subheading size="lg" weight="light" color="white">
                Science-backed supplements, personalized DNA-driven insights, and
                epigenetic testing to help take control of how you age.
              </Subheading>
              <HR color="white" marginTop="18px" marginBottom="18px" opacity=".3" />
              <Flex align="center" gap="16px" style={{ marginTop: '18px' }}>
                <StyledPillButton variant="primary">Our Products</StyledPillButton>
                <StyledPillButton variant="secondary">How Are You Aging?</StyledPillButton>
              </Flex>
            </Flex>
          </GridItem>

          {/* Timer Section */}
          <StyledGridItem columnSpan="span 6" order={2}>
            <Flex justify="center" align="center">
              <CountDown />
            </Flex>
          </StyledGridItem>
        </Grid>
      </Container>
    </BackgroundVideo>
  </>
);

export default HomePage;
