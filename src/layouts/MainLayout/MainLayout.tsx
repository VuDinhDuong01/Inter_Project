import {  memo} from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/components/Header/Header'
import { Footer } from '~/components/Footer/Footer'

 const MainLayout = ({ children }:
  { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default memo(MainLayout)
