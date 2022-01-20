import styled from 'styled-components';
import { respondTo } from '../../../styles/helpers';

const StyledGrid = styled.section`
  & > * + * {
    margin-top: 4.5rem; // 72px
  }

  ${respondTo.xl`
    & > * + * {
      margin-top: 0;
    }

    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    row-gap: 4.5rem;
  `}
`;

const StyledErrorWrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;

export { StyledGrid, StyledErrorWrapper };
