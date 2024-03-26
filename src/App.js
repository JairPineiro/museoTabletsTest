import { useState } from 'react';
import './App.css';
import { MainRoutes } from './routers/MainRoutes';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (place) => {
    if (favorites.some(favorite => favorite.id === place.id)) {
      removeFromFavorites(place);
    } else {
      addToFavorites(place);
    }
  };

  const addToFavorites = (place) => {
    if (!favorites.find(favorite => favorite.id === place.id)) {
      setFavorites(prevFavorites => [...prevFavorites, place]);
    }
  };

  const removeFromFavorites = (place) => {
    setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== place.id));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const favoritesCount = favorites.length;

  return (
    <div>
      <MainRoutes
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      removeFromFavorites={removeFromFavorites}
      clearAllFavorites={clearAllFavorites}
      favoritesCount={favoritesCount}
      />
    </div>
  );
}

export default App;
