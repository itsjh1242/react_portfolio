import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface DesktopProps {
  children: React.ReactNode; // children 속성을 정의
}

interface MobileProps {
  children: React.ReactNode; // children 속성을 정의
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });

  return <React.Fragment>{isPc && children}</React.Fragment>;
};

const Mobile: React.FC<MobileProps> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

export { Desktop, Mobile };
