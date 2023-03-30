import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getSorvetes } from "../../../services/api";


export default function Sorvetes(){

  const [sorvetes, setSorvetes] = useState([]);

  useEffect(() => {
    (async () => {
      const sorvetesRequest = await getSorvetes();

      setSorvetes(sorvetesRequest.data)

    })()
  },[])

  return <>
    <Head title='Sorvetes' />
    <SnackTitle>Hambúrguers</SnackTitle>
    <Snacks snacks={sorvetes} />
  </>


}
