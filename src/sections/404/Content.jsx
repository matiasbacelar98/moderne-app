import styled from 'styled-components';
import Button from '../../components/reusable/btn/Button';
import { StyledError, StyledH3 } from '../../styles/reusable/typography';

const Content = () => {
  return (
    <StyledSection className='wrapper spacing-top'>
      <StyledError>404</StyledError>
      <StyledH3>Ha ocurrido un error...</StyledH3>

      <div className='adjust-button-pos'>
        <Button path='/' text='Volver a inicio' />
      </div>
    </StyledSection>
  );
};

// Styles
const StyledSection = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  .adjust-button-pos {
    margin-top: 1rem;
    margin-right: 3rem; // To fix optical illusion
  }
`;

export default Content;
