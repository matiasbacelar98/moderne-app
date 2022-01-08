import PropTypes from 'prop-types';
import Logo from '../logo/Logo';
import { StyledH3 } from '../../styles/reusable/typography';
import { StyledGrid, StyledFlexWrapper, StyledContent } from './styles';
import { StyledScrollButton } from '../../styles/reusable/button';

const Footer = ({ spacing }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={`wrapper ${spacing}`}>
      <StyledGrid className='flow-spacing-content rm-spacing-xl'>
        <StyledContent gridArea='title'>
          <Logo type='dark' />
          <p className='max-width-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eu nunc, sagittis
            scelerisque lacus risus sed gravida.
          </p>
        </StyledContent>

        <StyledContent gridArea='schedule'>
          <StyledH3 regular>Horarios</StyledH3>
          <div>
            <p>Lun-Vier 8:00a.m - 17:00p.m</p>
            <p>Encuentros con cita previa.</p>
          </div>
        </StyledContent>

        <StyledContent gridArea='direction'>
          <StyledH3 regular>Direccion</StyledH3>
          <p>Peña 2085, C1126 ABA, Buenos Aires</p>
        </StyledContent>

        <StyledFlexWrapper gridArea='copyright'>
          <p>&copy; 2021 Agencia Moderne - Todos Los Derechos Reservados</p>
          <StyledScrollButton onClick={toTop}>Volver arriba</StyledScrollButton>
        </StyledFlexWrapper>
      </StyledGrid>
    </footer>
  );
};

// Proptypes
Footer.propTypes = {
  spacing: PropTypes.string,
};

Footer.defaultProps = {
  spacing: '',
};

export default Footer;
