import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { useSnack } from "../../../hooks/useSnack";

export default function Sorvetes(){

  const {iceCreams} = useSnack()

  return <>
    <Head title='Sorvetes' />
    <SnackTitle>Hambúrguers</SnackTitle>
    <Snacks snacks={iceCreams} />
  </>


}
