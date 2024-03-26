import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useOpenPlaceCard = () => {
  const navigate = useNavigate();

  const openPlaceCard = useCallback((place) => {
    navigate(`/place/${place.id}`);
  }, [navigate]);

  return openPlaceCard;
};

export default useOpenPlaceCard;
