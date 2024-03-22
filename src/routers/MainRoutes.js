import { Route, Routes } from 'react-router-dom'
import { MainMenu } from '../components/MainMenu'
import { Favorites } from '../components/Favorites'
import { PlaceInformation } from '../components/PlaceInformation'


export const MainRoutes = ({allPlaces, setAllPlaces}) => {

  return (
    <Routes>
      <Route exact path='/' element={<MainMenu allPlaces={allPlaces} setAllPlaces={setAllPlaces}/>}/>
      <Route  path='/main-menu' element={<MainMenu allPlaces={allPlaces} setAllPlaces={setAllPlaces} />}/>
      <Route  path='/favorites' element={<Favorites allPlaces={allPlaces} setAllPlaces={setAllPlaces}/>}/>
      <Route path='/place/:id' element= {<PlaceInformation/>}/>
    </Routes>
  )
}
