import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PlaceholderLoading from 'react-placeholder-loading';
import { useAnimation } from 'framer-motion';
import { usePropertiesData } from '../../../api/usePropertiesData';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { StyledH1, StyledH2 } from '../../../styles/reusable/typography';
import { StyledMapWrapper, StyledOverlay, StyledTitleWrapper, StyledCloseBtn } from './styles';
import { attributionText, icon, apiKey } from './utils';

const PropertiesMap = () => {
  const { isLoading, error, propertiesData } = usePropertiesData();
  const [properties, setProperties] = useState([]);

  const animationControls = {
    map: useAnimation(),
    overlay: useAnimation(),
    title: useAnimation(),
    closeBtn: useAnimation(),
  };

  const { width } = useWindowDimensions();
  const zoomLevel = width < 500 ? 12 : 14;
  const headerHeight = width < 500 ? 88 : 113;
  const mapHeight = width < 500 ? 200 : 350;

  // Populate state with propertiesData coordinates
  useEffect(() => {
    if (isLoading) return;

    const propertiesCoordinates = propertiesData.map(propertie => ({
      id: propertie.id,
      content: propertie.title,
      coordinates: propertie.coordinates,
    }));

    setProperties(propertiesCoordinates);
  }, [propertiesData, isLoading]);

  const toggleMapAnim = async open => {
    await Promise.all([
      animationControls.closeBtn.start({
        y: open ? 0 : '-45px',
        transition: {
          type: 'tween',
          duration: 0.5,
          ease: 'easeOut',
        },
      }),

      animationControls.map.start({
        height: open ? `calc(100vh - ${headerHeight}px)` : `${mapHeight}px`,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      }),

      animationControls.overlay.start({
        opacity: open ? 0 : 1,
        pointerEvents: open ? 'none' : 'auto',
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      }),

      animationControls.title.start({
        opacity: open ? 0 : 1,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      }),
    ]);
  };

  if (error) {
    return (
      <StyledMapWrapper className='wrapper'>
        <StyledH2 className='max-width-700'>
          Ha ocurrido un error , por favor recargue la pagina
        </StyledH2>
      </StyledMapWrapper>
    );
  }

  return (
    <StyledMapWrapper animate={animationControls.map}>
      {isLoading ? (
        <PlaceholderLoading shape='rect' width='100%' height='100%' />
      ) : (
        <MapContainer
          center={[-34.59245773155005, -58.407329324609385]}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          zoom={zoomLevel}
        >
          <TileLayer attribution={attributionText} url={apiKey} />

          {properties.map(propertie => (
            <Marker
              key={propertie.id}
              position={propertie.coordinates}
              icon={icon}
              alt='icono marcador'
            >
              <Popup style={{ fontFamily: 'var(--font)' }}>{propertie.content}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      <StyledOverlay animate={animationControls.overlay} onClick={() => toggleMapAnim(true)}>
        <StyledTitleWrapper className='wrapper' animate={animationControls.title}>
          <StyledH1 light>Propiedades</StyledH1>
        </StyledTitleWrapper>
      </StyledOverlay>

      <StyledCloseBtn
        initial={{ y: '-45px' }}
        animate={animationControls.closeBtn}
        onClick={() => toggleMapAnim(false)}
      >
        Cerrar
      </StyledCloseBtn>
    </StyledMapWrapper>
  );
};

export default PropertiesMap;
