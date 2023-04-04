import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Burgues(){

  const {burgers} = useSnack();

   return <>
    <Head title='Hamburguers' description='Nossos melhores hamburguers' />
    <SnackTitle>Hambúrguers</SnackTitle>
    <Snacks snacks={burgers}></Snacks>
  </>
}
