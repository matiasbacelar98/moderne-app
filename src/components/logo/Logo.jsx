import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fluidValues } from '../../styles/helpers';
import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';

const Logo = ({ type }) => {
  let logoSrc;

  if (type === 'light') {
    logoSrc = LogoLight;
  }

  if (type === 'dark') {
    logoSrc = LogoDark;
  }

  return (
    <StyledLogo>
      <img src={logoSrc} alt='logo' />
    </StyledLogo>
  );
};

// Styles
const StyledLogo = styled.div`
  width: ${fluidValues(280, 1400, 112, 160)};
`;

// Proptypes
Logo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Logo;
