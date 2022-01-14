import { useQuery } from 'react-query';

async function fetchSinglePropertie(id) {
  const response = await fetch(`https://moderne-api.herokuapp.com/properties/${id}`);
  return response.json();
}

export const useSinglePropertie = id => {
  const {
    isLoading,
    error,
    data: singlePropertie,
  } = useQuery(`propertie-${id}`, fetchSinglePropertie(id));

  return { isLoading, error, singlePropertie };
};
