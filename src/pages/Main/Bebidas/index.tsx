import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";

import { getBebidas } from "../../../services/api";

export default function Bebidas () {

  const [bebidas, setBebidas] = useState([]);


  useEffect(() => {
    (async () => {
      const bebidasRequest = await getBebidas();

      setBebidas(bebidasRequest.data)

    })()
  },[])

  return <>
    <Head title='Bebidas'  />
    <SnackTitle>Bebidas</SnackTitle>
    <Snacks snacks={bebidas} />
  </>
}
