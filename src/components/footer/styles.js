import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

const StyledGrid = styled.div`
  ${respondTo.xl`
    display : grid;
    grid-template-columns: 28.125rem 1fr repeat(2, minmax(15.625rem , 1fr)); 
    column-gap: 1rem;
    grid-template-areas:
      "title          .      schedule     direction"
      "copyright  copyright  copyright    copyright" ;                                           
  `}
`;

const StyledContent = styled.div`
  & > * + * {
    margin-top: 2rem; // 32px
  }

  ${respondTo.xl`
    & > * + * {
        margin-top: 1rem; 
    }

    grid-area: ${props => props.gridArea};
  `}
`;

const StyledFlexWrapper = styled.div`
  ${respondTo.xl`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8.5rem;
    grid-area: ${props => props.gridArea};
  `}
`;

const StyledButton = styled.button`
  display: none;
  border: 0;
  background-color: transparent;

  ${respondTo.md`
    position: relative;
    display: inline-block;
    font-size: var(--fs-text-large);
    color: var(--clr-dark);

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--clr-dark);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }   

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}
`;

export { StyledGrid, StyledFlexWrapper, StyledContent, StyledButton };
