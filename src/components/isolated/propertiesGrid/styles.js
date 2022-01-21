import styled from 'styled-components';
import { respondTo } from '../../../styles/helpers';

export const StyledGrid = styled.section`
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
