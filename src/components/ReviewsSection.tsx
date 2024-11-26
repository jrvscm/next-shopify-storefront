import React from "react";
import styled from "styled-components";
import { Container, PillButton } from "../styles/Base";
import { Subheading, Text } from "../styles/Typography";
import { media } from "../utils/Media";

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.colors.background2};
    margin: 0;
    padding: 0;
`;

const FullWidthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `120px ${theme.spacing.md}`};
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ReviewCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const VerifiedText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const StyledPillButton = styled(PillButton)`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  min-width: 300px;
  ${media.md} {
    width: 100%;
  }
`;

const StyledSubheading = styled(Subheading)`
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const ReviewsSection = ({
  title,
  subtitle,
  reviews,
  buttonText,
  onButtonClick,
}: {
  title: string;
  subtitle: string;
  reviews: { content: string; verified: string }[];
  buttonText: string;
  onButtonClick: () => void;
}) => {
  return (
    <FullWidthContainer>
      {/* Header */}
      <HeaderWrapper>
        <StyledSubheading align="center" size="xxxl" color="primary">
          {title}
        </StyledSubheading>
        <Text align="center" size="lg" weight="light" color="gray">
          {subtitle}
        </Text>
      </HeaderWrapper>

      {/* Reviews */}
      <ReviewsGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            {/* Stars */}
            <StarsWrapper>
            {Array(5)
                .fill(0)
                .map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                </svg>
                ))}
            </StarsWrapper>

            {/* Review Content */}
            <Text size="lg" weight="light" color="primary">{review.content}</Text>

            {/* Verified Customer */}
            <VerifiedText weight="light">{review.verified}</VerifiedText>
          </ReviewCard>
        ))}
      </ReviewsGrid>

      {/* Call to Action */}
      <StyledPillButton variant="primary" onClick={onButtonClick}>
        {buttonText}
      </StyledPillButton>
    </FullWidthContainer>
  );
};

export default ReviewsSection;
