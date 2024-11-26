import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import BackgroundVideo from '../components/BackgroundVideo';
import { Subheading, Text } from '../styles/Typography';
import { media } from '../utils/Media';

const ParallaxContainer = styled.div<{ cardsLength: number }>`
  height: ${({ cardsLength }) => `calc(100vh * ${cardsLength})`}; /* Total height = number of cards * viewport height */
  position: relative;
`;

const Card = styled.div<{ index: number }>`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ index }) => 100 + index};
`;

const ContentWrapper = styled.div<{ textPosition: string }>`
  position: absolute;
  z-index: 2; 
  color: white;
  width: 100%;
  max-width: 800px;
  background: rgba(0,0,0,.3);
//   backdrop-filter: blur(10px); /* Apply blur effect */
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.md};
  will-change: transform, backdrop-filter;

  ${({ textPosition }) =>
    textPosition === 'top-left' &&
    `
        top: 10%;
        left: 10%;

        ${media.md}{
            top: 6%;
            left: 6%;
            right: 6%;
            max-width: 80%;
        }
    `}

  ${({ textPosition }) =>
    textPosition === 'bottom-right' &&
    `   
        bottom: 10%;
        right: 10%;

        ${media.md} {
            bottom: 6%;
            right: 6%;
            left: 6%;
            max-width: 80%;
        }
    `}

  ${({ textPosition }) =>
    textPosition === 'center' &&
    `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80%;
    `}
`;

const OverlayText = styled.div`
  & > * {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const StyledSubheading = styled(Subheading)`
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

interface CardData {
  videoSrc: string;
  title: string;
  description: string;
  textPosition?: 'top-left' | 'top-right' | 'center';
  textAlign?: 'left' | 'center';
  color?: keyof DefaultTheme['colors'];
}

interface ParallaxCardsProps {
  cards: CardData[];
  defaultTextPosition?: 'top-left' | 'top-right' | 'center';
}

const ParallaxCards: React.FC<ParallaxCardsProps> = ({
  cards,
  defaultTextPosition = 'center',
}) => {
  return (
    <ParallaxContainer cardsLength={cards.length}>
      {cards.map((card, i) => (
        <Card key={i} index={i}>
          <BackgroundVideo
            videoSrc={card.videoSrc}
            overlayColor="rgba(0, 0, 0, 0.4)"
            overlayOpacity={0.6}
          >
            <ContentWrapper textPosition={card.textPosition || defaultTextPosition}>
              <OverlayText>
                <StyledSubheading color={card.color} size="xxxl" align={card.textAlign}>
                  {card.title}
                </StyledSubheading>
                <Text color={card.color} size="lg" align={card.textAlign}>
                  {card.description}
                </Text>
              </OverlayText>
            </ContentWrapper>
          </BackgroundVideo>
        </Card>
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxCards;
