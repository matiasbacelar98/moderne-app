import Card from './card/Card';
import GridSkeleton from './gridSkeleton/GridSkeleton';
import { usePropertiesData } from '../../../api/usePropertiesData';
import { StyledGrid, StyledErrorWrapper } from './styles';
import { StyledH2 } from '../../../styles/reusable/typography';

const PropertiesGrid = () => {
  const { isLoading, error, propertiesData } = usePropertiesData();

  if (isLoading) {
    return <GridSkeleton />;
  }

  if (error) {
    return (
      <StyledErrorWrapper className='wrapper'>
        <StyledH2 className='max-width-700'>
          Ha ocurrido un error , por favor recargue la pagina
        </StyledH2>
      </StyledErrorWrapper>
    );
  }

  return (
    <StyledGrid className='wrapper'>
      {propertiesData.map((propertie, index) => (
        <Card key={propertie.id} data={propertie} index={index} />
      ))}
    </StyledGrid>
  );
};

export default PropertiesGrid;
