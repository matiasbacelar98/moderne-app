import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoSkeleton from './infoSkeleton/InfoSkeleton';
import { useSinglePropertie } from '../../../api/useSinglePropertie';
import {
  StyledSection,
  StyledTitleWrapper,
  StyledFlexWrapper,
  StyledBox,
  StyledImgWrapper,
  StyledErrorWrapper,
} from './styles';
import { StyledH1, StyledH2, StyledInfo } from '../../../styles/reusable/typography';

const Info = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { isLoading, error, singlePropertie } = useSinglePropertie(id);

  // Wait till singlePropertie is ready
  useEffect(() => {
    if (isLoading) return;

    // Populate data
    setData(...singlePropertie);
  }, [isLoading, singlePropertie]);

  if (isLoading) {
    return <InfoSkeleton />;
  }

  if (error) {
    return (
      <section>
        <StyledErrorWrapper className='wrapper'>
          <StyledH2 className='max-width-700'>
            Ha ocurrido un error , por favor recargue la pagina
          </StyledH2>
        </StyledErrorWrapper>
      </section>
    );
  }

  return (
    <StyledSection>
      <StyledTitleWrapper className='wrapper'>
        <StyledH1>{data.title}</StyledH1>
        <StyledInfo as='h2'>{data.direction}</StyledInfo>
      </StyledTitleWrapper>

      <StyledFlexWrapper className='wrapper flow-spacing-content rm-spacing-xl'>
        <StyledBox>
          <p>Direccion</p>
          <StyledInfo>{data.direction}</StyledInfo>
        </StyledBox>

        <StyledBox borders>
          <p>En venta desde</p>
          <StyledInfo>{data.year}</StyledInfo>
        </StyledBox>

        <StyledBox>
          <p>Habitaciones</p>
          <StyledInfo>{data.rooms}</StyledInfo>
        </StyledBox>
      </StyledFlexWrapper>

      <StyledImgWrapper>
        <img src={data.img} alt='propiedad' />
      </StyledImgWrapper>
    </StyledSection>
  );
};

export default Info;
