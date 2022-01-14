import styled from 'styled-components';
import { StyledH1 } from '../../../styles/reusable/typography';
import aboutMainImg from '../../../assets/images/about-main.png';
import { homeBox, propertiesBox } from '../../../utils/navigationData';
import Navigation from '../../../components/navigation/Navigation';
import { fluidValues, respondTo } from '../../../styles/helpers';

const Content = () => {
  return (
    <>
      <StyledWrapper className='wrapper flow-spacing-content'>
        <div>
          <StyledSubText className='sub-title'>Como nacio la Agencia Moderne</StyledSubText>
          <StyledH1>Nuestra Historia</StyledH1>
        </div>

        <StyledParragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sit sit mattis risus
          purus cras neque, commodo vel. Dictum faucibus ut volutpat nullam massa tellus habitant
          ultricies. Elementum malesuada ipsum viverra vivamus facilisi varius. Iaculis purus ornare
          nullam tincidunt mauris quam urna ut libero. Urna egestas vulputate egestas ultricies
          fermentum, montes, id. Tempus sed praesent a donec turpis lorem quam non. Phasellus sed
          quam orci, accumsan, penatibus. Blandit viverra ornare ultrices et. Sed pharetra turpis
          pretium lacus, sed ut volutpat.
        </StyledParragraph>

        <StyledParragraph>
          Dictum eget odio elit malesuada sed arcu at. Non magnis proin tellus sed fermentum quis
          cras praesent. Sollicitudin lacus sed ornare leo, libero ac viverra sit viverra. Massa
          mauris, hendrerit arcu malesuada pulvinar enim imperdiet augue at. Egestas id ante aliquam
          pellentesque. Ullamcorper pellentesque vitae diam sit vitae, massa purus. Amet, diam
          tortor nec magna ullamcorper turpis mauris at amet. Vitae magna eget nisi, malesuada sed
          quis lectus facilisi. Neque ante eu vel urna pretium. Tincidunt augue in sociis pulvinar
          amet sodales nibh aliquam. Leo dolor quis habitant a risus, dictum feugiat.
        </StyledParragraph>
      </StyledWrapper>

      <StyledImg className='spacing-top' src={aboutMainImg} alt='interior casa' />

      <Navigation boxOneValues={homeBox} boxTwoValues={propertiesBox} />
    </>
  );
};

// Styles
const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  margin-top: ${fluidValues(280, 1200, 120, 160)};
`;

const StyledParragraph = styled.p`
  max-width: 50rem; // 800px
`;

const StyledSubText = styled.span`
  display: block;
  padding-bottom: 1rem;

  ${respondTo.xl`
      padding-bottom: 0
  `}
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default Content;
