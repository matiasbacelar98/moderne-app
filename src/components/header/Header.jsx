import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HamburguerIcon from '../hamburguerIcon/HamburguerIcon';
import Logo from '../logo/Logo';
import MobileMenu from '../mobileMenu/MobileMenu';
import DesktopMenu from '../desktopMenu/DesktopMenu';
import { addScrollbar } from '../../utils/utilities';
import {
  StyledHeader,
  StyledWrapper,
  StyledFacebookIcon,
  StyledMailIcon,
  StyledBg,
} from './styles';
import { useHeader } from './useHeader';
import { StyledScrollButton } from '../../styles/reusable/button';

const Header = ({ light }) => {
  const {
    headerRef,
    isBoxShadowActive,
    isMenuOpen,
    isTextWhite,
    currentWindowWidth,
    pathname,
    renderPathName,
    setIsMenuOpen,
    headerControls,
    bgControls,
    toFooter,
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
          <p className={`${isTextWhite ? 'text-white' : 'text-dark'}`}>{renderPathName}</p>
        </div>

        <a
          href='https://www.facebook.com/'
          target='_blank'
          className={`moveElementForward-10 header-link facebook-icon ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
          rel='noreferrer'
        >
          <StyledFacebookIcon />
        </a>

        <a
          href='mailto: moderne@gmail.com'
          className={`moveElementForward-10 header-link mail-icon ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
          rel='noreferrer'
        >
          <StyledMailIcon />
        </a>

        <Link
          to='/propiedades'
          className={`moveElementForward-10 header-link properties-link underline ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
        >
          Nuestras propiedades
        </Link>

        <StyledScrollButton
          color={isTextWhite ? 'white' : 'black'}
          type='button'
          className={`moveElementForward-10 header-link contact-link ${
            isTextWhite ? 'text-white' : 'text-dark'
          }`}
          onClick={toFooter}
        >
          Contacto
        </StyledScrollButton>
      </StyledWrapper>

      {/* Background - Only on Home route */}
      {pathname === '/' ? <StyledBg initial={{ y: '-100%' }} animate={bgControls} /> : null}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && currentWindowWidth < 1024 ? <MobileMenu /> : null}
      </AnimatePresence>

      {/* Desktop Menu */}
      <AnimatePresence exitBeforeEnter onExitComplete={addScrollbar}>
        {isMenuOpen && currentWindowWidth >= 1024 ? (
          <DesktopMenu setIsMenuOpen={setIsMenuOpen} />
        ) : null}
      </AnimatePresence>
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
