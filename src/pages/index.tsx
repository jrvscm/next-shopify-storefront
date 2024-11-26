import React from 'react';
import styled from 'styled-components';
import { FiActivity, FiShield, FiBookOpen, FiTablet } from 'react-icons/fi';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Heading, Subheading, Text } from '../styles/Typography';
import { PillButton, Flex, Container, HR } from '../styles/Base';
import { Grid, GridItem } from '../styles/Grid';
import { media } from '../utils/Media';
import { theme } from '../styles/Theme';
import { useDeviceType } from '../hooks/useDeviceType';

import Brands from '../components/Brands';
import Timer from '../components/CountDown';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import PercentageSection from '../components/PercentageSection';
import ReviewsSection from '../components/ReviewsSection';
import ParallaxCards from '../components/ParallaxCards';

const StyledHeading = styled(Heading)`
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const StyledSubheading = styled(Subheading)`
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
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
    margin: 7rem auto 4rem auto;
  }
`;

const StyledHR = styled(HR)`
  ${media.md}{
    margin-top: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const StyledGrid = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const HomePage: React.FC = () => {
  const { isDesktop } = useDeviceType();
  const cardsData = [
    {
      videoSrc: `https://videos.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/3xAaOGGP8vIPwttsYa7TJm/e120e6e77db6a96674d95c053140f5eb/wheat.mp4`,
      title: 'The prairie hums with life, its grasses swaying beneath endless skies.',
      description: '',
      textPosition: 'top-left',
      textAlign: 'left',
      color: theme.colors.white
    },
    {
      videoSrc: `https://videos.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/4eZYFeMZ2hz5nhxOtaLzdS/a9898e314f0c5621a001cd26d382fad2/2414312-hd_1920_1080_30fps.mp4`,
      title: 'The ocean teems with vibrant life, showcasing a fascinating array of creatures, from bioluminescent jellyfish to agile, curious dolphins.',
      description: '',
      textPosition: 'center',
      textAlign: 'center',
      color: theme.colors.white
    },
    {
      videoSrc: `https://videos.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/3KRa1ocovOXQjrDiiblzCU/4837529a1cd54a94b68e9637d52674af/beach.mp4`,
      title: 'The steady rhythm of waves meets the quiet strength of the shoreline, a place where sea and sky converge.',
      description: '',
      textPosition: 'bottom-right',
      textAlign: 'left',
      color: theme.colors.white
    },
  ];

  return (
    <>
      <BackgroundVideo
        videoSrc="/videos/hero-video.mp4"
        overlayColor="rgba(0, 0, 0, 0.6)"
        overlayOpacity={0.6}
        fallbackImage="/images/fallback.jpg"
      >
        <Container>
          <StyledGrid columns="repeat(12, 1fr)">
            {/* Content Section */}
            <GridItem columnSpan="span 6" display="flex" order={1}>
              <Flex direction="column" justify="center" align="flex-start" margin={`0 auto ${theme.spacing.lg}`}>
                <StyledHeading size="xxxl" weight="extraBold" color="white">
                  What is Lorem Ipsum?
                </StyledHeading>
                <StyledHR color="white" marginTop="0px" marginBottom="0px" opacity=".3" />
                <StyledSubheading size="lg" weight="light" color="white">
                  It is a long established fact that a reader will be distracted by 
                  the readable content of a page when looking at its layout.
                </StyledSubheading>
                <Flex align="center" gap={theme.spacing.md}>
                  <StyledPillButton variant="primary">Our Products</StyledPillButton>
                  <StyledPillButton variant="secondary">Start Free Trial?</StyledPillButton>
                </Flex>
              </Flex>
            </GridItem>

            {/* Timer Section */}
            <StyledGridItem columnSpan="span 6" order={2}>
              <StyledFlex justify="center" align="center">
                <Timer 
                  timerStart={50}
                  timerEnd={30}
                  primaryText="Countdown to"
                  secondaryText="great event"
                />
              </StyledFlex>
            </StyledGridItem>
          </StyledGrid>
        </Container>
      </BackgroundVideo>
      
      {/* Brands Section */}
      <Brands brands={[
        { src: '/images/brand10.svg', alt: 'Brand 10' },
        { src: '/images/brand8.svg', alt: 'Brand 8' },
        { src: '/images/brand7.svg', alt: 'Brand 7' },
        { src: '/images/brand6.svg', alt: 'Brand 6' },
        { src: '/images/brand5.svg', alt: 'Brand 5' },
        { src: '/images/brand4.svg', alt: 'Brand 4' },
        { src: '/images/brand3.svg', alt: 'Brand 3' },
        { src: '/images/brand2.svg', alt: 'Brand 2' },
      ]}/>
      
      <ContentLeftImageRight 
        isDesktop={isDesktop}
        imageUrl={!isDesktop ? '/images/nikes-mobile-min.png' : "/images/nikes-min.jpg"} 
        imageAlt={'Nike shoes'}
        buttonAction={() => null}
        features={[
          { icon: <FiActivity />, text: 'Premium-quality, lab-tested' },
          { icon: <FiTablet />, text: 'Formulated by scientists' },
          { icon: <FiBookOpen />, text: 'Peer-reviewed research' },
          { icon: <FiShield />, text: 'Third-party safety certified' },
        ]}
        heading={`Amazingly beautiful premium products`}
        description={`Unlock the path to a healthier, more vibrant life with cutting-edge innovations—designed to empower wellness and elevate your journey toward a brighter, more fulfilling tomorrow.`}
        buttonText={'View Our Amazing Products'}
        containerBackground={theme.colors.background2}
      />

      <PercentageSection
        title={
          <>
            Over <span style={{'color': theme.colors.secondary}}>62%</span> of our members enjoyed their lives more <span style={{'color': theme.colors.secondary}}>with our products.</span>
          </>
        }
        description={<>They saved an average of <span style={{'color': theme.colors.secondary }}>$1,000 dollars</span></>}
        buttonText="Shop Exclusive Collections"
        percentage={62}
        duration={2000}
        onButtonClick={() => alert('Button clicked!')}
        isDesktop={isDesktop}
      />

      <ReviewsSection
        title="Verified Reviews"
        subtitle="Hear from our customers"
        reviews={[
          {
            content:
              "I've noticed a remarkable boost in my overall energy levels and focus since using these products. It's been a game-changer for my daily routine.",
            verified: "VERIFIED CUSTOMER",
          },
          {
            content:
              "The supplements have significantly improved my sleep quality and overall wellness. I feel rejuvenated and ready to take on the day!",
            verified: "VERIFIED CUSTOMER",
          },
          {
            content:
              "After trying several similar products, this is the first one that truly delivers on its promises. My mood and energy levels have never been better.",
            verified: "VERIFIED CUSTOMER",
          },
        ]}
        buttonText="Shop Now"
        onButtonClick={() => console.log("Redirect to shop page")}
      />

      {/* Parallax Cards */}
      <ParallaxCards cards={cardsData} />
    </>
  )
};

export default HomePage;
