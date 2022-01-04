import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledWrapper,
  StyledFacebookIcon,
  StyledMailIcon,
  StyledBg,
} from './styles';
import HamburguerIcon from '../hamburguerIcon/HamburguerIcon';
import Logo from '../logo/Logo';
import { useHeader } from './useHeader';

const Header = ({ light }) => {
  const {
    pathname,
    formatPath,
    headerRef,
    isBoxShadowActive,
    isMenuOpen,
    setIsMenuOpen,
    isTextWhite,
    headerControls,
    bgControls,
  } = useHeader(light);

  return (
    <StyledHeader
      ref={headerRef}
      className={`${isBoxShadowActive ? 'boxShadow' : ''}`}
      animate={headerControls}
      bgTransparent={light}
    >
      <StyledWrapper className='wrapper'>
        <div className='logo moveElementForward-10'>
          <Logo type={isTextWhite ? 'light' : 'dark'} />
        </div>

        <div className='hamburguer'>
          <HamburguerIcon
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            light={isTextWhite}
          />
        </div>

        <div className='pathname moveElementForward-10'>
          <svg
            width='15'
            height='45'
            viewBox='0 0 15 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='1.29459'
              y1='47.0932'
              x2='13.7395'
              y2='0.648381'
              stroke={isTextWhite ? 'var(--clr-light)' : 'var(--clr-dark)'}
            />
          </svg>
          <p className={`moveElementForward-10 ${isTextWhite ? 'text-white' : 'text-dark'}`}>
            {formatPath(pathname)}
          </p>
        </div>

        <a
          href='https://www.facebook.com/'
          target='_blank'
          className={`header-link facebook-icon  moveElementForward-10 ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
          rel='noreferrer'
        >
          <StyledFacebookIcon />
        </a>

        <a
          href='mailto: moderne@gmail.com'
          className={`header-link mail-icon moveElementForward-10 ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
          rel='noreferrer'
        >
          <StyledMailIcon />
        </a>

        <Link
          to='/propiedades'
          className={`header-link properties-link underline moveElementForward-10 ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
        >
          Nuestras propiedades
        </Link>

        <a
          href='#contact'
          className={`header-link contact-link moveElementForward-10 ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
        >
          Contacto
        </a>
      </StyledWrapper>

      {pathname === '/' ? <StyledBg initial={{ y: '-100%' }} animate={bgControls} /> : null}
    </StyledHeader>
  );
};

// Proptypes
Header.propTypes = {
  light: PropTypes.bool,
};

Header.defaultProps = {
  light: false,
};

export default Header;
