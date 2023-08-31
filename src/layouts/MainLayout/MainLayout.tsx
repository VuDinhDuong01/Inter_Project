import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'

import { Header } from '~/components/Header/Header'
import { Footer } from '~/components/Footer/Footer'

export const MainLayout = ({ children, title }:
  { children: React.ReactNode, title: string }) => {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div>
      <Helmet>
        <title>
          {title}
        </title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="page blog" />
        <meta name="author" content="its me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
