import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import PlaceholderLoading from 'react-placeholder-loading';
import Error from '../../../components/reusable/error/Error';
import { StyledH2 } from '../../../styles/reusable/typography';
import { respondTo } from '../../../styles/helpers';
import { useSinglePropertie } from '../../../api/useSinglePropertie';

const About = () => {
  const { isLoading, error, singlePropertie } = useSinglePropertie();

  if (isLoading) {
    return (
      <StyledSection className='wrapper flow-spacing-content rm-spacing-xl'>
        <div className='max-width-250'>
          <PlaceholderLoading shape='rect' width='100%' height='40' />
        </div>

        <div className='flow-spacing-content'>
          <PlaceholderLoading shape='rect' width='100%' height='300' />
          <PlaceholderLoading shape='rect' width='100%' height='300' />
        </div>
      </StyledSection>
    );
  }

  if (error) {
    return (
      <section>
        <Error />
      </section>
    );
  }

  return (
    <StyledSection className='wrapper flow-spacing-content rm-spacing-xl'>
      <StyledH2>Sobre la propiedad</StyledH2>

      <div className='flow-spacing-content'>
        {singlePropertie[0].information.map(text => (
          <p key={uuidv4()} className='max-width-700'>
            {text}
          </p>
        ))}
      </div>
    </StyledSection>
  );
};

// Styles
const StyledSection = styled.section`
  ${respondTo.xl`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export default About;
