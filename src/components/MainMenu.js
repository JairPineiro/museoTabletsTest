import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import {places} from '../data/places'
import useOpenPlaceCard from '../hooks/useOpenPlaceCard';
import '../App.css';
import { useState } from 'react';

export const MainMenu = ({ favorites, toggleFavorite, favoritesCount }) => {
    const [cardsAnimation, setCardsAnimation] = useState(true)
    const {openPlaceCard, animateCard} = useOpenPlaceCard();

    // Funcion para navegar a la ventana de Favoritos
    const navigatetoFavs = useNavigate();
    const navigateToFavsPage = () => {
            setCardsAnimation(false)
            navigatetoFavs('/favorites')

    };
    
  return (
      <div className='main-menu-container'>
        <h1 className='title'>Main Menu</h1>
        <button className='go-favs-button' onClick={navigateToFavsPage}>Favoritos ({favoritesCount})</button>
        <CSSTransition
            in={cardsAnimation}
            timeout={800}
            classNames="move-cards-container"
            unmountOnExit
        >
            <div className='cards-container'>
                {places.map((place) => (
                    <CSSTransition
                    key={place.id}
                    in={cardsAnimation}
                    timeout={800}
                    classNames="rotate-card"
                    unmountOnExit
                    >
                        <CSSTransition
                            in={animateCard}
                            timeout={800}
                            classNames="cards-down"
                            unmountOnExit
                        >
                            <div className='card' key={place.id}>
                                <div className='place-info-container' onClick={() => openPlaceCard(place)}>
                                        <div>
                                            <h2>{place.nombre}</h2>
                                            <p>{place.descripcion}</p>
                                        </div>
                                </div>
                                <button onClick={() => toggleFavorite(place)}>
                                        {favorites.some(favorite => favorite.id === place.id) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                                    </button>
                            </div>
                        </CSSTransition>   
                    </CSSTransition>
                ))}
            </div>        
        </CSSTransition>
    </div>
  );
};

export default MainMenu;
