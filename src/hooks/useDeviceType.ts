import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

export const useDeviceType = (): { isMobile: boolean; isTablet: boolean; isDesktop: boolean } => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia(`(max-width: ${theme.breakpoints.xs})`);
    const tabletMediaQuery = window.matchMedia(
      `(min-width: ${theme.breakpoints.xs}) and (max-width: ${theme.breakpoints.md})`
    );

    const updateDeviceType = () => {
      setIsMobile(mobileMediaQuery.matches);
      setIsTablet(tabletMediaQuery.matches);
      setIsDesktop(!mobileMediaQuery.matches && !tabletMediaQuery.matches);
    };

    updateDeviceType();

    mobileMediaQuery.addEventListener('change', updateDeviceType);
    tabletMediaQuery.addEventListener('change', updateDeviceType);

    return () => {
      mobileMediaQuery.removeEventListener('change', updateDeviceType);
      tabletMediaQuery.removeEventListener('change', updateDeviceType);
    };
  }, [theme]);

  return { isMobile, isTablet, isDesktop };
};

