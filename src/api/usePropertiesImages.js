import { useQuery } from 'react-query';

async function fetchPropertiesImages() {
  const response = await fetch('https://moderne-api.onrender.com/api/properties/images');
  return response.json();
}

export const usePropertiesImages = () => {
  const { isLoading, data: propertiesImages } = useQuery(
    'properties-images',
    fetchPropertiesImages
  );
  return { isLoading, propertiesImages };
};
