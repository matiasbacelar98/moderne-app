import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { StyledContent, StyledImgWrapper, StyledInfo, StyledLine } from './styles';

const Card = ({ data, index }) => {
  const { year, rooms, status, img } = data;
  const imgControls = useAnimation();

  const checkStatusAndRenderName = status => {
    const statusObj = {
      'on sale': 'En venta',
      sold: 'Vendida',
      'coming soon': 'Próximamente',
    };

    return statusObj[status];
  };

  return (
    <div>
      <StyledImgWrapper>
        <Link to={`/propiedades/${index + 1}`}>
          <motion.img
            animate={imgControls}
            src={img}
            alt='casa'
            onHoverStart={() => {
              imgControls.start({
                scale: 1.12,
                transition: {
                  duration: 0.5,
                  type: 'tween',
                  ease: 'easeOut',
                },
              });
            }}
            onHoverEnd={() => {
              imgControls.start({
                scale: 1,
                transition: {
                  duration: 0.5,
                  type: 'tween',
                  ease: 'easeOut',
                },
              });
            }}
          />
        </Link>
      </StyledImgWrapper>

      <StyledContent>
        <StyledInfo>
          <p>Estatus</p>
          <span className='text-semibold'>{checkStatusAndRenderName(status)}</span>
        </StyledInfo>

        <StyledLine />

        <StyledInfo>
          <p>Año de construccion</p>
          <span className='text-semibold'>{year}</span>
        </StyledInfo>

        <StyledLine />

        <StyledInfo>
          <p>Cantidad de habitaciones</p>
          <span className='text-semibold'>{rooms}</span>
        </StyledInfo>
      </StyledContent>
    </div>
  );
};

// Proptypes
Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    direction: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    rooms: PropTypes.number,
    status: PropTypes.string,
    img: PropTypes.string,
    information: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
