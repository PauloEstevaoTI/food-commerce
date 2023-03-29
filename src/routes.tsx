import { Routes, Route } from 'react-router-dom'


import MainPage from './pages/Main'
import Pizzas from './pages/Main/Pizzas'
import Sorvetes from './pages/Main/Sorvetes'
import BurguesPage from './pages/Main/Burgues'
import Bebidas from './pages/Main/Bebidas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={< BurguesPage />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/bebidas' element={<Bebidas/>} />
        <Route path='/sorvetes' element={<Sorvetes />} />
      </Route>

    </Routes>
  )
}
