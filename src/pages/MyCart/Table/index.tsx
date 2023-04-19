
import { useCart } from "../../../hooks/useCart";

import { TableDesktop } from "./TableDesktop";



export const Table = () => {

  const { cart } = useCart();

  if(cart.length === 0)
    return <h1>Ops! Parece que você não tem pedidos, peça já!</h1>

  return (
    <TableDesktop />
  )
  // return(
  //   <Container>
  //     { cart.length > 0 &&
  //       cart.map((item)=> (
  //         <div key={item.id} className="itemCart">
  //           <img src={item.image} />
  //           <div className="snack">
  //             <title>LANCHE</title>
  //             <p>{item.name}</p>
  //             <span className="price">{currencyFormat(item.price)}</span>
  //           </div>
  //           <div className="qtd">
  //             <title>QTD</title>
  //             <span>-</span>
  //             <p>{item.quantity}</p>
  //             <span>+</span>
  //           </div>
  //           <div className="subtotal">
  //             <title>SUBTOTAL</title>
  //             <span className="price"> {currencyFormat(item.subtotal)}</span>
  //           </div>
  //           <hr />
  //         </div>
  //       ))

  //     }
  //   </Container>
  // )
}
