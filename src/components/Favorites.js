import useOpenPlaceCard from '../hooks/useOpenPlaceCard'
import { CSSTransition } from 'react-transition-group';
import '../App.css'
import { useEffect, useState } from 'react';

export const Favorites = ({favorites, removeFromFavorites, clearAllFavorites}) => {
  const {openPlaceCard, animateCard} = useOpenPlaceCard();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Cambiar a true cuando el componente se monte
}, []);
  return (
    <div>
        <h1>Estos son tus favoritos</h1>
        <button onClick={clearAllFavorites}>Eliminar todos los favoritos</button>
          <CSSTransition
            in={isMounted} // Puedes controlar este valor con un estado si lo necesitas
            timeout={500}
            classNames="scale"
            unmountOnExit
            >
              <main className='cards-container'>
                {favorites.map((favorite) => (
                      <div key={favorite.id} className='card'>
                          <div className='place-info-container' onClick={() => openPlaceCard(favorite)}>
                              <h2>{favorite.nombre}</h2>
                              <p>{favorite.descripcion}</p>
                          </div>
                          <button onClick={() => removeFromFavorites(favorite)}>Eliminar de Favoritos</button>
                      </div>
                    ))}
              </main>
          </CSSTransition>
    </div>
  )
}


export default Favorites;