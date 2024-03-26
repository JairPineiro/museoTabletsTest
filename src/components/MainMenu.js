import { useNavigate } from 'react-router-dom'
import {places} from '../data/places'
import useOpenPlaceCard from '../hooks/useOpenPlaceCard';

export const MainMenu = ({ favorites, toggleFavorite, favoritesCount }) => {
    const openPlaceCard = useOpenPlaceCard();
    const navigatetoFavs = useNavigate();

    const navigateToFavsPage = () => {
      navigatetoFavs('/favorites')
    };

  return (
    <div className='main-menu-container'>
        <h1>Main Menu </h1>
        <button className='go-favs-button' onClick={navigateToFavsPage}>Favoritos ({favoritesCount})</button>
        <div className='cards-container'>
            {places.map((place) => (
                <div key={place.id} className='card'>
                    <div className='place-info-container' onClick={() => openPlaceCard(place)}>
                        <h2>{place.nombre}</h2>
                        <p>{place.descripcion}</p>
                    </div>
                    <button onClick={() => toggleFavorite(place)}>
                            {favorites.some(favorite => favorite.id === place.id) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                        </button>
                </div>
            ))}
        </div>        
    </div>
  );
};

export default MainMenu;
