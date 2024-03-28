import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useOpenPlaceCard = () => {
  const navigate = useNavigate();
  const [animateCard, setAnimateCard] = useState(true)
  const openPlaceCard = useCallback((place) => {
    navigate(`/place/${place.id}`);
    setAnimateCard(false)
  }, [navigate]);

  return {openPlaceCard, animateCard};
};

export default useOpenPlaceCard;
