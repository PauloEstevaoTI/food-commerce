import { Container } from './styles'

import { SideBar } from '../../components/Sidebar'
import { MyOrder } from '../../components/MyOrder'

import { Outlet } from 'react-router-dom'


import logoImg from '../../assets/logo.svg'


export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logoImg}/>
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
