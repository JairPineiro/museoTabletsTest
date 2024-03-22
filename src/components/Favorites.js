import React from 'react'
import { Link } from 'react-router-dom'
import useOpenPlaceCard from '../hooks/useOpenPlaceCard'
import useAutoRedirect from '../hooks/useAutoRedirect'
import useGoBack from '../hooks/useGoBack'

export const Favorites = ({allPlaces, setAllPlaces}) => {

  const onDeletePlace = (place) => {
    const results = allPlaces.filter(selected => selected.id !== place.id)
    setAllPlaces(results)
  } 
  
  const onDeleteAll = () => {
    setAllPlaces([])
  }
  
    const goBack = useGoBack();
    useAutoRedirect('/',10000)
    const openPlaceCard = useOpenPlaceCard();
  return (
    <div>
        <h1>Estos son tus favoritos</h1>
        <button onClick={goBack}>Regresar</button>
        <main className='cards-container'>
          {allPlaces.map(place => (
            <div key={place.id} className='card'>
              <div className='place-info-container' onClick={() => openPlaceCard(place)}>
                <h2>{place.nombre}</h2>
                <p>{place.descripcion}</p>
              </div>
              <button onClick={() => onDeletePlace(place)}>Eliminar de favoritos</button>
        </div>
          ))}
        </main>
        <button onClick={onDeleteAll}>Eliminar todos mis favoritos</button>
        <button className='go-favs-button'>
          <Link to='/main-menu' className='link-button'>Regresar a Menu principal</Link>
        </button>
    </div>
  )
}
