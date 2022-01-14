import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const useHeader = light => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextWhite, setIsTextWhite] = useState(light);
  const [isBoxShadowActive, setIsBoxShadowActive] = useState(false);
  const [prevYPos, setPrevYPos] = useState(null);
  const [renderPathName, setRenderPathName] = useState('');
  const headerRef = useRef(null);

  const { width } = useWindowDimensions();
  const { pathname, key } = useLocation();

  const [currentWindowWidth] = useDebounce(width, 1000);
  const [debouncePrevYPos] = useDebounce(prevYPos, 50);

  const headerControls = useAnimation();
  const bgControls = useAnimation();

  const toFooter = () => {
    const documentHeight = document.documentElement.scrollHeight;
    window.scrollTo(0, documentHeight);
  };

  // Animate Header on scroll
  useEffect(() => {
    const handleScrollAnim = () => {
      const currentYPos = window.scrollY;
      const headerHeight = headerRef.current.offsetHeight;

      if (currentYPos < prevYPos) {
        // show header
        headerControls.start({
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });

        if (pathname === '/') {
          bgControls.start({
            y: 0,
            transition: {
              duration: 0.3,
              ease: [0.1, 0.25, 0.3, 1],
            },
          });

          setIsTextWhite(false);
        }

        setIsBoxShadowActive(true);
      }

      if (currentYPos > headerHeight && currentYPos > prevYPos) {
        // Hide header
        headerControls.start({
          y: -headerHeight,
          transition: {
            duration: 0.6,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });

        if (pathname === '/') {
          bgControls.start({
            y: -headerHeight,
            transition: {
              duration: 0.6,
              ease: [0.1, 0.25, 0.3, 1],
            },
          });
        }

        setIsBoxShadowActive(false);
      }

      if (currentYPos === 0) {
        headerControls.start({
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });

        if (pathname === '/') {
          bgControls.start({
            y: -headerHeight,
            transition: {
              duration: 0.3,
              ease: [0.1, 0.25, 0.3, 1],
            },
          });

          setIsTextWhite(true);
        }

        setIsBoxShadowActive(false);
      }

      // update last position
      setPrevYPos(currentYPos);
    };

    // add event
    window.addEventListener('scroll', handleScrollAnim, false);

    // clean event
    return () => window.removeEventListener('scroll', handleScrollAnim, false);

    // eslint-disable-next-line
  }, [debouncePrevYPos]);

  // Delay path
  useEffect(() => {
    const formatPath = pathStr => {
      const pathWithoutDashes = pathStr.replace(/-/g, ' ');
      const pathWithoutBar = pathWithoutDashes.slice(1);

      if (key === 'default') {
        setRenderPathName('Error');
        return;
      }

      if (pathWithoutBar === '') {
        setRenderPathName('Home');
        return;
      }

      const formatedPath = pathWithoutBar
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      setRenderPathName(formatedPath);
    };

    const timer = setTimeout(() => {
      formatPath(pathname);
    }, 90);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, key]);

  return {
    headerRef,
    isBoxShadowActive,
    isMenuOpen,
    isTextWhite,
    currentWindowWidth,
    pathname,
    renderPathName,
    setIsMenuOpen,
    headerControls,
    bgControls,
    toFooter,
  };
};
