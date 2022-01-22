import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

async function fetchSinglePropertie(id) {
  const response = await fetch(`https://moderne-api.herokuapp.com/properties/${id}`);
  return response.json();
}

export const useSinglePropertie = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: singlePropertie,
  } = useQuery(['properties', id], () => fetchSinglePropertie(id));

  return { isLoading, error, singlePropertie };
};
