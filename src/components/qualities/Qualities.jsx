import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { motion, useTransform } from 'framer-motion';
import { useInViewScroll } from 'framer-motion-hooks';
import { useDebounce } from 'use-debounce';
import { StyledH3 } from '../../styles/reusable/typography';
import { StyledGrid, StyledContent, StyledImgWrapper } from './styles';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const Qualities = ({ values, reverse }) => {
  const { title, content, imgSrc } = values;

  const { width: currentWidth } = useWindowDimensions();
  const [debounceWidth] = useDebounce(currentWidth, 1000);

  const parallaxImgWrapper = useRef(null);
  const progress = useInViewScroll(parallaxImgWrapper);
  const yScrollValue = useTransform(progress, [0, 1], [0, 350]);

  // check window width and enable or disable animation
  const y = debounceWidth < 1024 ? 0 : yScrollValue;

  // Scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledGrid className='flow-spacing-content rm-spacing-xl' reverse={reverse}>
      <StyledContent className='flow-spacing-content'>
        <StyledH3>{title}</StyledH3>

        {content.map(parragraph => (
          <p key={uuidv4()}>{parragraph}</p>
        ))}
      </StyledContent>

      <StyledImgWrapper ref={parallaxImgWrapper}>
        <motion.img src={imgSrc} alt='interior casa' className='parallax-img' style={{ y }} />
      </StyledImgWrapper>
    </StyledGrid>
  );
};

// Proptypes
Qualities.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string),
    imgSrc: PropTypes.string,
  }).isRequired,
  reverse: PropTypes.bool,
};

Qualities.defaultProps = {
  reverse: null,
};

export default Qualities;
