import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Transitions from '../transitions/Transitions';

const Layout = ({ children, headerIsLight }) => {
  return (
    <>
      <Header light={headerIsLight} />

      {children}

      <Footer spacing='spacing-top footer-spacing-bottom' />

      {/* Page Transitions */}
      <Transitions />
    </>
  );
};

// Proptypes
Layout.propTypes = {
  children: PropTypes.element.isRequired,
  headerIsLight: PropTypes.bool.isRequired,
};

export default Layout;
