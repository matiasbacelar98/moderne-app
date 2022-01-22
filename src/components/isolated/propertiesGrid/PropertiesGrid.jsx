import Error from '../../reusable/error/Error';
import Card from './card/Card';
import GridSkeleton from './gridSkeleton/GridSkeleton';
import { usePropertiesData } from '../../../api/usePropertiesData';
import { StyledGrid } from './styles';

const PropertiesGrid = () => {
  const { isLoading, error, propertiesData } = usePropertiesData();

  if (isLoading) {
    return <GridSkeleton />;
  }

  if (error) {
    return (
      <section>
        <Error />
      </section>
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
