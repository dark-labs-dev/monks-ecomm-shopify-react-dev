import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  console.log(item)
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
      option => `${option.name}: ${option.value} `
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Wrapper>
      {/* {console.log(item)} */}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      {/* 
        <p>
       {item.title}
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
      </p>
      {selectedOptions} */}
      {getPrice(item.quantity * item.variant.price)}
      <button onClick={handleRemove}>Remove</button>
    </Wrapper>
  )
}

export default LineItem
