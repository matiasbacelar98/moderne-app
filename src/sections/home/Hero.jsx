import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';
import { StyledH1 } from '../../styles/reusable/typography';
import Button from '../../components/reusable/btn/Button';
import Slider from '../../components/isolated/slider/Slider';

const Hero = () => {
  return (
    <StyledBgImgWrapper>
      <StyledContent className='wrapper flow-spacing-content'>
        <StyledH1 light className='max-width-500'>
          Innovación y tecnologia
        </StyledH1>

        <p className='text-white max-width-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, molestie et egestas rhoncus
          volutpat adipiscing. Dui in varius elit orci et luctus aliquam maecenas. Amet, aliquam et
          aliquet condimentum quis enim.
        </p>
        <Button white path='/sobre-moderne' text='Descubrir mas' />
      </StyledContent>

      <Slider />
    </StyledBgImgWrapper>
  );
};

// Styles
const StyledBgImgWrapper = styled.section`
  position: relative;
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(var(--clr-dark-value), 0.4);
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 8rem; // 128px
  padding-bottom: 2.5rem; // 40px
`;

export default Hero;
