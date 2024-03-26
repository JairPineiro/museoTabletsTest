import React from 'react';
import { useParams } from 'react-router-dom';
import { places } from '../data/places';

export const PlaceInformation = () => {
    const {id} = useParams();
    const placeInfo = places.find(place => place.id === id);
    return (
        <div>
            {placeInfo && (  // Verificación de nulidad de placeInfo
                <div key={placeInfo.id} className='card'>
                    <h2>{placeInfo.nombre}</h2>
                    <p>{placeInfo.descripcion}</p>
                    <p>{placeInfo.ubicacion}</p>
                </div>
            )}
        </div>
    );
};


export default PlaceInformation;