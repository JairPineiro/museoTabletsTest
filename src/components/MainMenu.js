import { Link } from 'react-router-dom'
import {places} from '../data/places'
import useOpenPlaceCard from '../hooks/useOpenPlaceCard';
import useAutoRedirect from '../hooks/useAutoRedirect';

export const MainMenu = ({allPlaces, setAllPlaces}) => {

    
    useAutoRedirect('/', 10000)

    const onAddPlace = (place) => {
         if (!allPlaces.some(selected => selected.nombre === place.nombre)) {
            setAllPlaces([...allPlaces, place]);
            console.log(`Se agregó ${place.nombre} a tu arreglo`)
            console.log(allPlaces)
        }else{
            alert(`${place.nombre} ya fue agregado a tus favoritos`)
        }
    };
    const openPlaceCard = useOpenPlaceCard();
  return (
    <div className='main-menu-container'>
        <h1>Main Menu </h1>
        <div className='cards-container'>
            {places.map((place) => (
                <div key={place.id} className='card'>
                    <div className='place-info-container' onClick={() => openPlaceCard(place)}>
                        <h2>{place.nombre}</h2>
                        <p>{place.descripcion}</p>
                    </div>
                    <button onClick={() => onAddPlace(place)}>Añadir a favoritos</button>
                </div>
            ))}
        </div>
        
        
        <button className='go-favs-button'>
            <Link to='/favorites' className='link-button'>Ir a Favoritos</Link>
        </button>
    </div>
  );
};

export default MainMenu;
