import { useState, useEffect } from "react";

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks";
import { getBurguers } from "../../../services/api";

export default function Burgues(){

  const [burguers, setBurguers] = useState([]);

  useEffect(() => {
    (async () => {
      const burguerRequest = await getBurguers();

      setBurguers(burguerRequest.data)

    })()
  },[])

  //console.log(burguers);

  return <>
    <Head title='Hamburguers' description='Nossos melhores hamburguers' />
    <SnackTitle>Hambúrguers</SnackTitle>
    <Snacks snacks={burguers}></Snacks>
  </>
}
