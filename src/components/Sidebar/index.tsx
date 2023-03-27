import { Container } from './styles'
import { useState } from 'react';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import  {ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg'
import  {ReactComponent as PizzaIcon} from '../../assets/pizza.svg'
import  {ReactComponent as SodaIcon} from '../../assets/soda.svg'

import menuImg from '../../assets/menu.svg'

export function SideBar() {

  const [menuOpen, setMenuOpen] = useState(false);


const handleToggleMenu = () => {
  setMenuOpen(!menuOpen)
}


  return(
  <Container isMenuOpen={menuOpen}>
    <button type='button' onClick={handleToggleMenu} >
      <img src={menuImg} alt=''/>
    </button>
    <nav>
      <ul>
        <li>
          <a href="#" className='active'>
            <BurgerIcon />
            <span>Hamburguers</span>
          </a>
        </li>

        <li>
          <a href="#">
            <PizzaIcon />
            <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SodaIcon />
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <IceCreamIcon />
            <span>Sorvetes</span>
          </a>
        </li>
      </ul>
    </nav>
    </Container>
)}
