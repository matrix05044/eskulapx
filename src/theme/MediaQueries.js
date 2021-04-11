import { useMediaQuery } from 'react-responsive';

export const Wide = ({ children }) => {
  const isWide = useMediaQuery({ minWidth: 1600 });
  return isWide ? children : null;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  return isDesktop ? children : null;
};

export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  return isLaptop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? children : null;
};
