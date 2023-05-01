import { useCart } from "../../../hooks/useCart";
import { useState, useEffect } from "react";
import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";
import { EmptyCart } from "../../../components/EmptyCart";

export const Table = () => {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)
  const { cart } = useCart()

  useEffect(()=> {
    function updateTableComponentBaseInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }

    window.addEventListener('resize', updateTableComponentBaseInWindowWidth)

    return() => {
      window.removeEventListener('resize', updateTableComponentBaseInWindowWidth)
    }
  }, []);

  if(cart.length === 0){
    return <h1>
      <EmptyCart title='Ops! Parece que você não tem pedidos, peça já' />
    </h1>
  }

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
