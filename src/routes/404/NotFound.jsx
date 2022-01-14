import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Button from '../../components/btn/Button';
import { StyledError, StyledH3 } from '../../styles/reusable/typography';

const NotFound = () => {
  return (
    <Layout headerIsLight={false}>
      <StyledMain className='wrapper spacing-top'>
        <StyledError>404</StyledError>
        <StyledH3>Ha ocurrido un error...</StyledH3>

        <div className='adjust-button-pos'>
          <Button path='/' text='Volver a inicio' />
        </div>
      </StyledMain>
    </Layout>
  );
};

// Styles
const StyledMain = styled.main`
  display: grid;
  place-items: center;
  text-align: center;

  .adjust-button-pos {
    margin-top: 1rem;
    margin-right: 3rem; // To fix optical illusion
  }
`;

export default NotFound;
