import PropTypes from 'prop-types';
import { StyledWrapper, StyledBox, StyledImgWrapper } from './styles';
import { StyledH2, StyledBoxText } from '../../styles/reusable/typography';

const Navigation = ({ boxOneValues, boxTwoValues }) => {
  const { title, text, imgSrc, pathTo } = boxOneValues;
  const { title: titleTwo, text: textTwo, imgSrc: imgSrcTwo, pathTo: secondPathTwo } = boxTwoValues;

  return (
    <StyledWrapper>
      <StyledBox to={pathTo}>
        <StyledBoxText>{text}</StyledBoxText>
        <StyledH2 light>{title}</StyledH2>
        <StyledImgWrapper className='img'>
          <img src={imgSrc} alt={title} />
        </StyledImgWrapper>
      </StyledBox>

      <StyledBox to={secondPathTwo}>
        <StyledBoxText>{textTwo}</StyledBoxText>
        <StyledH2 light>{titleTwo}</StyledH2>
        <StyledImgWrapper className='img'>
          <img src={imgSrcTwo} alt={titleTwo} />
        </StyledImgWrapper>
      </StyledBox>
    </StyledWrapper>
  );
};

// Proptypes
Navigation.propTypes = {
  boxOneValues: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    pathTo: PropTypes.string,
  }).isRequired,
  boxTwoValues: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    pathTo: PropTypes.string,
  }).isRequired,
};

export default Navigation;
