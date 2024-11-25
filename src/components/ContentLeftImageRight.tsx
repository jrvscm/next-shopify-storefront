import styled from 'styled-components';
import { Container, Flex, PillButton } from '../styles/Base';
import { Subheading, Text } from '../styles/Typography';
import { Grid, GridItem } from '../styles/Grid';
import { media } from '../utils/Media';
import { ReactNode } from 'react';
import { theme } from '../styles/Theme';

interface Feature {
  icon: ReactNode;
  text: string;
}

interface ContentLeftImageRightProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  features: Feature[];
  isDesktop: boolean;
}

const StyledPillButton = styled(PillButton)`
  height: 48px;
  ${media.md} {
    width: 100%;
  }
`;

const StyledContainer = styled(Container)<{ $imageUrl: string }>`
  max-width: unset;
  margin: 0;
  background: ${({ $imageUrl }) => `url(${$imageUrl}) center center`};
  background-size: cover;
  background-position: center;

  ${media.md} {
    padding: 0;
    background: #edede5;
    background-size: unset;
    background-position: unset;
  }
`;

const StyledGrid = styled(Grid)`
  padding: 60px 0px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  ${media.md} {
    padding: 0px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: ${({ theme }) => theme.spacing.lg};

  ${media.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const StyledGridItem = styled(GridItem)`
  ${media.md} {
    padding: ${({ theme }) => theme.spacing.lg};
    margin-top: -4rem;
  }
`;

const ContentLeftImageRight: React.FC<ContentLeftImageRightProps> = ({
  imageUrl,
  imageAlt,
  heading,
  description,
  buttonText,
  buttonAction,
  features,
  isDesktop,
}) => (
  <StyledContainer $imageUrl={!isDesktop ? 'none' : imageUrl}>
    <StyledGrid columns="repeat(12, 1fr)">
      {/* Stacked Content Mobile */}
      {!isDesktop && (
        <GridItem columnSpan="span 12" display="flex">
          <Flex direction="column" align="flex-start" width="100%">
            <Image src={imageUrl} alt={imageAlt} />
          </Flex>
        </GridItem>
      )}
      {/* Left Content */}
      <StyledGridItem columnSpan="span 6" display="flex">
        <Flex direction="column" align="flex-start" width="100%">
          <Subheading size={!isDesktop ? 'xxl' : 'xxxl'} color={theme.colors.primary}>
            {heading}
          </Subheading>
          <Text size={!isDesktop ? 'md' : 'lg'} weight="light">
            {description}
          </Text>
          <StyledPillButton variant="primary" onClick={buttonAction}>
            {buttonText}
          </StyledPillButton>
          {/* Features Section */}
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                {feature.icon}
                <Text size="md" color={theme.colors.primary}>
                  {feature.text}
                </Text>
              </FeatureItem>
            ))}
          </FeaturesGrid>
        </Flex>
      </StyledGridItem>
    </StyledGrid>
  </StyledContainer>
);

export default ContentLeftImageRight;