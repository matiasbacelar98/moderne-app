import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
  StyledWrapper,
  StyledLinkImg,
  StyledLinkBox,
  StyledDotsWrapper,
  StyledContentWrapper,
  StyledArrowWrapper,
  StyledLink,
} from './styles';
import arrowSvg from '../../assets/images/arrow-down-icon.svg';
import { useInterval } from '../../hooks/useInterval';

import homeImg from '../../assets/images/home.png';
import contactImg from '../../assets/images/contact.jpg';
import propertiesImg from '../../assets/images/properties.jpg';
import visionOne from '../../assets/images/vision-1.jpg';
import visionTwo from '../../assets/images/vision-2.jpg';

const Slider = () => {
  const [delaySliderAnim, setDelaySliderAnim] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentPath, setCurrentPath] = useState(1);
  const arrowControls = useAnimation();
  const images = [contactImg, homeImg, propertiesImg, visionOne, visionTwo];
  const dots = [0, 1, 2, 3, 4];

  // Update paths
  useEffect(() => {
    setCurrentPath(currentImg + 1);
  }, [images.length, currentImg]);

  // Delay slider start till transition finish
  useEffect(() => {
    setTimeout(() => {
      setDelaySliderAnim(false);
    }, 6000);
  }, []);

  // Update img src
  useInterval(() => {
    if (delaySliderAnim) return;

    if (currentImg === images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, 5000);

  return (
    <StyledWrapper>
      <StyledDotsWrapper>
        {dots.map(dot => (
          <motion.button
            animate={{
              scale: dot === currentImg ? 1.5 : 1,
              transition: {
                duration: 0.3,
              },
            }}
            type='button'
            key={dot}
          />
        ))}
      </StyledDotsWrapper>

      <StyledContentWrapper>
        <StyledLinkImg to={`/propiedades/${currentPath}`}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              key={currentImg}
              src={images[currentImg]}
              alt='house'
            />
          </AnimatePresence>
        </StyledLinkImg>

        <StyledLinkBox>
          <StyledLink
            to='/propiedades'
            onMouseEnter={() =>
              arrowControls.start({
                x: 10,
              })
            }
            onMouseLeave={() =>
              arrowControls.start({
                x: 0,
              })
            }
          >
            <span>Propiedades</span>

            <StyledArrowWrapper animate={arrowControls}>
              <img src={arrowSvg} alt='flecha' />
            </StyledArrowWrapper>
          </StyledLink>
        </StyledLinkBox>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Slider;
