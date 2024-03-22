import { useState } from 'react';
import './App.css';
import { MainRoutes } from './routers/MainRoutes';

function App() {
  const [allPlaces, setAllPlaces] = useState([]);
  return (
      <MainRoutes
      allPlaces={allPlaces}
      setAllPlaces = {setAllPlaces}
      />
  );
}

export default App;
