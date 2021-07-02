import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductHomeForm from "~/components/ProductHomeForm"

import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridCenter,
  GridRight,
} from '~/utils/styles'
import StoreContext from '~/context/StoreContext'
import { ProductTitle, ProductDescription } from './styles'
import InfoUi from '~/components/infoUi/productInfoUi'
import { UsePageDispatch } from '~/context/pageContext'
import Footer from '../../components/footer'

function PageCheck() {
  const PageDispatch = UsePageDispatch()
  useEffect(() => {
    PageDispatch({ type: 'UpdatePage', payload: "product" })
  }, [])
  return (<>
  </>)
}

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))


  return (
      <Container>
      <SEO title={product.title} description={product.description} />
      <PageCheck pagePay="product" />
        <TwoColumnGrid>

          <GridLeft>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductTitle aria-label={`${product.title} Price`}>{getPrice(product.variants[0].price)}</ProductTitle>
            <ProductHomeForm product={product} />
          </GridLeft>

          <GridCenter>
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </GridCenter>

          <GridRight>
            <InfoUi
              title={'Description'}
              description={JSON.parse(product.description)["home"]}
              type='description'
            />

            <InfoUi
              title={'Ingredients'}
              description={(JSON.parse(product.description)["home"].ingredients)}
              type='list'
            />

            <InfoUi
              title={'Notes'}
              description={(JSON.parse(product.description)["home"].application)}
              type='application'
            />
          </GridRight>
        </TwoColumnGrid>
        <Footer/>
      </Container>
  )
}
export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ProductPage
