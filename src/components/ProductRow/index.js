import React, { useContext, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { GridRow, Product, Title, PriceTag } from './styles'
import { HomeImg, HomeImageUi } from '~/utils/styles'
import ProductHomeForm from "../ProductHomeForm"
import InfoUi from '~/components/infoUi'

const ProductRow = () => {

    const {
        store: { checkout },
    } = useContext(StoreContext)
    const { allShopifyProduct } = useStaticQuery(
        graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
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
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
    )

    const getPrice = price =>
        Intl.NumberFormat(undefined, {
            currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
            minimumFractionDigits: 2,
            style: 'currency',
        }).format(parseFloat(price ? price : 0))

    const productItm = allShopifyProduct.edges[1].node

    return (

        <GridRow>
            {allShopifyProduct.edges ? (
                allShopifyProduct.edges.map(
                    ({
                        node: {
                            id,
                            handle,
                            title,
                            productType,
                            description,
                            descriptionHtml,
                            shopifyId,
                            images: [firstImage],
                            variants: [firstVariant],
                            options: [firstOption],
                            priceRange,
                        },
                    }) => (
                        <Product key={id}>
                            <Title>{title}</Title>
                            <PriceTag aria-label={`${title} Price`}>{getPrice(firstVariant.price)}</PriceTag>
                            <Link to={`/product/${handle}/`}>
                                {firstImage && firstImage.localFile && (
                                    <>
                                        <HomeImg
                                            fluid={firstImage.localFile.childImageSharp.fluid}
                                            alt={handle}
                                        />
                                    </>
                                )}
                            </Link>
                            <HomeImageUi>
                                <svg
                                    width="21"
                                    height="8"
                                    viewBox="0 0 21 8"
                                    fill="none"
                                // onClick={ }
                                >
                                    <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </HomeImageUi>
                            <InfoUi
                                title={'Info'}
                                description={JSON.parse(description)["home"].description}
                                type='description'
                            />
                            <InfoUi
                                title={'From'}
                                description={(JSON.parse(description)["home"].ingredients)}
                                type='list'
                            />

                            {/* <DescriptionTextContainer>
                                <TextToggle
                                    aria-label="More Information"
                                    onClick={() => setDescriptionToggle(!descriptionToggle)}>Info</TextToggle>
                                {descriptionToggle && <DescriptionText>
                                    {JSON.parse(description)["home"].description}
                                </DescriptionText>
                                }
                            </DescriptionTextContainer>

                            <DescriptionTextContainer>
                                <TextToggle
                                    aria-label="Ingredients"
                                    onClick={() => setIngredientToggle(!ingredientToggle)}>From</TextToggle>
                                {ingredientToggle && <IngredientList
                                    list={(JSON.parse(description)["home"].ingredients)}
                                />
                                }
                            </DescriptionTextContainer> */}

                            <ProductHomeForm
                                productTest={productItm}
                                product={{
                                    "id": id,
                                    "handle": handle,
                                    "title": title,
                                    "productType": productType,
                                    "description": description,
                                    "descriptionHtml": descriptionHtml,
                                    "shopifyId": shopifyId,
                                    "variants": [firstVariant],
                                    "options": [firstOption],
                                    "priceRange": priceRange
                                }}
                            />
                        </Product>
                    )
                )
            ) : (
                <p>More Monks Essentially From Coming Soon</p>
            )}
        </GridRow>
    )
}

export default ProductRow
