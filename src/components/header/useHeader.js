import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';
import { useAnimation } from 'framer-motion';

export const useHeader = light => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextWhite, setIsTextWhite] = useState(light);
  const [isBoxShadowActive, setIsBoxShadowActive] = useState(false);

  const [prevYPos, setPrevYPos] = useState(null);
  const [debouncePrevYPos] = useDebounce(prevYPos, 50);

  const headerRef = useRef(null);
  const headerControls = useAnimation();
  const bgControls = useAnimation();

  const { pathname } = useLocation();

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

  const formatPath = pathStr => {
    const pathWithoutDashes = pathStr.replace(/-/g, ' ');
    const pathWithoutBar = pathWithoutDashes.slice(1);
    let text;

    if (pathWithoutBar === '') {
      text = 'Home';
    } else {
      text = pathWithoutBar
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    return text;
  };

  return {
    pathname,
    formatPath,
    headerRef,
    isBoxShadowActive,
    isMenuOpen,
    setIsMenuOpen,
    isTextWhite,
    headerControls,
    bgControls,
  };
};
