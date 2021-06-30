import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import {CheckoutButton} from './LineItem/styles'
const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      {lineItems}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes calculated at checkout</h2>
      {/* <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p> */}
      <br />
      <CheckoutButton
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </CheckoutButton>
    </div>
  )
}

export default Cart
