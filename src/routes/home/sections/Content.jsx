import styled from 'styled-components';
import { StyledH2, StyledH3 } from '../../../styles/reusable/typography';
import Navigation from '../../../components/navigation/Navigation';
import Qualities from '../../../components/qualities/Qualities';
import { propertiesBox, aboutBox } from '../../../utils/navigationData';
import { qualityOne, qualityTwo, qualityThree } from '../../../utils/qualitiesData';

const Content = () => {
  return (
    <section className='wrapper spacing-top flow-spacing'>
      <StyledH2>Nuestra Vision</StyledH2>

      <Qualities values={qualityOne} />
      <Qualities values={qualityTwo} reverse />
      <Qualities values={qualityThree} />

      <StyledTextWrapper>
        <StyledH3 as='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pellentesque tempor semper
          odio morbi vitae eget luctus metus.
        </StyledH3>
      </StyledTextWrapper>

      <Navigation boxOneValues={propertiesBox} boxTwoValues={aboutBox} />
    </section>
  );
};

// Styles
const StyledTextWrapper = styled.div`
  max-width: 62.5rem; // 1000px
  margin-inline: auto;

  p {
    text-align: center;
  }
`;

export default Content;
