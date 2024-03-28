import { Route, Routes, useLocation } from 'react-router-dom'
import { MainMenu } from '../components/MainMenu'
import { Favorites } from '../components/Favorites'
import { PlaceInformation } from '../components/PlaceInformation'
import NavigationBar from '../components/NavigationBar'
import useAutoRedirect from '../hooks/useAutoRedirect'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import '../App.css';



export const MainRoutes = ({favorites, toggleFavorite, removeFromFavorites, clearAllFavorites, favoritesCount}) => {
  useAutoRedirect('/', 30000)
  const location = useLocation();
  return (
    <div>
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames='fade-pages' timeout={300} unmountOnExit>
      <Routes location={location}>
        <Route exact path='/' element={<MainMenu favorites={favorites} toggleFavorite={toggleFavorite} favoritesCount={favoritesCount}/>}/>
        <Route  path='/main-menu' element={<MainMenu favorites={favorites} toggleFavorite={toggleFavorite} favoritesCount={favoritesCount}/>}/>
        <Route  path='/favorites' element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} clearAllFavorites={clearAllFavorites} />}/>
        <Route  path='/place/:id' element= {<PlaceInformation/>}/>
      </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
