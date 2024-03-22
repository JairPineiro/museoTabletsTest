import { useCallback } from 'react';

const useOpenPlaceCard = () => {
  const openPlaceCard = useCallback((place) => {
        window.location.href = `place/${place.id}`;
  }, []);

  return openPlaceCard;
};

export default useOpenPlaceCard;
