import useOpenPlaceCard from '../hooks/useOpenPlaceCard'

export const Favorites = ({favorites, removeFromFavorites, clearAllFavorites}) => {
    const openPlaceCard = useOpenPlaceCard();

  return (
    <div>
        <h1>Estos son tus favoritos</h1>
        <button onClick={clearAllFavorites}>Eliminar todos los favoritos</button>
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
    </div>
  )
}

export default Favorites;