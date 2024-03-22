import React from 'react';
import { useParams } from 'react-router-dom';
import { places } from '../data/places';
import useAutoRedirect from '../hooks/useAutoRedirect';
import useGoBack from '../hooks/useGoBack';

export const PlaceInformation = () => {
    const goBack = useGoBack(); // Obtén la función handleGoBack del hook useGoBack
    const {id} = useParams();
    const placeInfo = places.find(place => place.id === id);

    useAutoRedirect('/', 10000);

    return (
        <div>
            <button onClick={goBack}>Regresar</button> {/* Llama a goBack en el onClick */}
            <div key={placeInfo.id} className='card'>
                <h2>{placeInfo.nombre}</h2>
                <p>{placeInfo.descripcion}</p>
                <p>{placeInfo.ubicacion}</p>
            </div>
        </div>
    );
};
