import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'

import { Container } from "./styles"

interface SnacksProps{
  snacks: any[]
}

export function Snacks ({snacks} : SnacksProps) {
  return(
    <Container>
      {snacks.map((item)=> (
        <div key={item.id} className='snack'>
          <h2>{item.name}</h2>
          <img src={item.image} />
          <p>{item.description}</p>
          <div>
            <strong>{currencyFormat(item.price)}</strong>
            <button type='button'><FiPlus/></button>
          </div>
        </div>
      ))}
    </Container>
  )
}
