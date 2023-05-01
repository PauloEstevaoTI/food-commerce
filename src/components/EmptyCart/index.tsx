import { Button, Container } from "./styles";
import manAndHamburguer from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string;
}


export const EmptyCart = ({title}: EmptyCartProps) => {
  return(
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndHamburguer} alt="Homem com hambúrguer" />
    </Container>
  )
}
