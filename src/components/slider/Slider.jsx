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
import placeholderImg from '../../assets/images/placeholder.png';
import { useInterval } from '../../hooks/useInterval';
import { usePropertiesImages } from '../../api/usePropertiesImages';

const Slider = () => {
  const [delaySliderAnim, setDelaySliderAnim] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentPath, setCurrentPath] = useState(1);
  const { isLoading, propertiesImages } = usePropertiesImages();
  const arrowControls = useAnimation();
  const dots = [0, 1, 2, 3, 4];

  // Update paths
  useEffect(() => {
    setCurrentPath(currentImg + 1);
  }, [currentImg]);

  // Delay slider start till transition finish
  useEffect(() => {
    setTimeout(() => {
      setDelaySliderAnim(false);
    }, 6000);
  }, []);

  // Update img src
  useInterval(() => {
    if (delaySliderAnim) return;

    if (currentImg === propertiesImages.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, 5000);

  const updateImgDots = index => {
    setCurrentImg(index);
  };

  return (
    <StyledWrapper>
      <StyledDotsWrapper>
        {dots.map((dot, index) => (
          <motion.button
            animate={{
              scale: dot === currentImg ? 1.5 : 1,
              transition: {
                duration: 0.3,
              },
            }}
            type='button'
            key={dot}
            onClick={() => updateImgDots(index)}
          />
        ))}
      </StyledDotsWrapper>

      <StyledContentWrapper>
        <StyledLinkImg to={`/propiedades/${currentPath}`}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              key={isLoading ? 'placeholder' : propertiesImages[currentImg].id}
              src={isLoading ? placeholderImg : propertiesImages[currentImg].img}
              alt='propiedad'
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
