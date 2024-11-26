import React from 'react';
import styled from 'styled-components';

interface BackgroundVideoProps {
  videoSrc: string; // Path to the video file
  children?: React.ReactNode; // Optional HTML content
  overlayColor?: string; // Optional overlay color
  overlayOpacity?: number; // Optional overlay opacity (0-1)
  fallbackImage?: string; // Optional fallback image
}

const VideoWrapper = styled.div<{ fallbackImage?: string }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  /* Fallback image if the video fails to load */
  background-image: ${({ fallbackImage }) =>
    fallbackImage ? `url(${fallbackImage})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div<{ color: string; opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  z-index: 1;
`;

const FlexContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  
`;

const Content = styled.div`
  text-align: center;
  color: white;
  height: 100vh;
`;

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  children,
  overlayColor = 'black',
  overlayOpacity = 0.5,
  fallbackImage,
}) => (
  <VideoWrapper fallbackImage={fallbackImage}>
    <Video autoPlay muted loop playsInline>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
    <Overlay color={overlayColor} opacity={overlayOpacity} />
    <FlexContainer>
      <Content>{children}</Content>
    </FlexContainer>
  </VideoWrapper>
);

export default BackgroundVideo;
