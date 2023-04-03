import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'

import { Container } from "./styles"
import { SkeletonSnack } from './SkeletonSnack'

interface SnacksProps{
  snacks: any[]
}

export function Snacks ({snacks} : SnacksProps) {
  return(
    <Container>
      {!snacks.length  ? (
        [1, 2, 3, 4].map((n)=><SkeletonSnack key={n} />)
        ) : (
        snacks.map((item)=> (
        <div key={item.id} className='snack'>
          <h2>{item.name}</h2>
          <img src={item.image} />
          <p>{item.description}</p>
          <div>
            <strong>{currencyFormat(item.price)}</strong>
            <button type='button'><FiPlus/></button>
          </div>
        </div>
      ))

      )}
    </Container>
  )
}
