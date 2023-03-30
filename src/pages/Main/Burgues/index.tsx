import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks";

export default function Burgues(){

  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'O artesanal tamanho família ..........................',
      price: '25.5',
      image: 'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra Bacon',
      description: 'O artesanal tamanho família ..........................',
      price: '25.5',
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    },

  ]

  console.log(data);

  return <>
    <Head title='Hamburguers' description='Nossos melhores hamburguers' />
    <SnackTitle>Hambúrguers</SnackTitle>
    <Snacks snacks={data}></Snacks>
  </>
}
