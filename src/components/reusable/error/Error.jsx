import styled from 'styled-components';
import { StyledH2 } from '../../../styles/reusable/typography';

const Error = () => {
  return (
    <StyledErrorWrapper className='wrapper'>
      <StyledH2 className='max-width-700'>
        Ha ocurrido un error , por favor recargue la pagina
      </StyledH2>
    </StyledErrorWrapper>
  );
};

// Styles
const StyledErrorWrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;

export default Error;
