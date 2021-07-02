import React, { useEffect } from 'react'

import { UsePageDispatch, UsePageState } from '~/context/pageContext'

import CartPage from '~/components/Cart'
import { CartContainer } from '~/utils/styles'
import Footer from '../components/footer'

export default function Cart() {
  const { Page } = UsePageState()
  const PageDispatch = UsePageDispatch()
  useEffect(() => {
    PageDispatch({ type: 'UpdatePage', payload: 'cart' })
  }, [Page])

  return (
    <>
      < CartContainer >
        <h1>Cart</h1>
        <CartPage />
      </CartContainer >
      <Footer/>
    </>
  )
}