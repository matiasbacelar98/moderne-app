import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: var(--fs-1);
  font-weight: 600;
  color: ${props => (props.light ? 'var(--clr-light)' : 'var(--clr-dark)')};
`;

const StyledH2 = styled.h2`
  font-size: var(--fs-2);
  font-weight: ${props => (props.regular ? '400' : '600')};
  color: ${props => (props.light ? 'var(--clr-light)' : 'var(--clr-dark)')};
`;

const StyledH3 = styled.h3`
  font-size: var(--fs-3);
  font-weight: ${props => (props.regular ? '400' : '600')};
`;

const StyledInfo = styled.span`
  font-size: 1.8125rem; // 29px
  font-weight: 400;
`;

const StyledError = styled.div`
  font-size: var(--fs-error);
  font-weight: 400;
`;

const StyledBoxText = styled.span`
  font-size: var(--fs-text-large);
  color: var(--clr-light);
  letter-spacing: 0.8px;
  display: block;
`;

export { StyledH1, StyledH2, StyledH3, StyledError, StyledInfo, StyledBoxText };
