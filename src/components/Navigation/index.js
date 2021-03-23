import React, { useContext, useEffect, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { UsePageState } from '~/context/pageContext'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../../utils/styles'
import { CartCounter, Container, MenuLinkTitle, MenuLink, NavList, NavListItem, ThreeDotButton } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const { Page } = UsePageState()
  const [hasItems, quantity] = useQuantity()

  const [navActive, setNavActive] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if ((typeof window !== "undefined") && (Page === "home")) {
        setNavActive(window.pageYOffset <= 1 && true)
      }
    }
    window.addEventListener("scroll", handleScroll)

    if (Page === "home") {
      setNavActive(true)
    }
    else {
      setNavActive(false)
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [Page]);

  const Wrapper = styled.div`
  background: ${colors.background};
  margin-bottom: 1.45rem;
  position:${navActive ? "absolute" : "fixed"};
  z-index:2;
  width:calc(100% - 2rem);
  border-bottom:solid 1px #fff;
  top: 0;
`

  return (
    <Wrapper >
      <Container>
        < MenuLinkTitle to="/">{siteTitle}</MenuLinkTitle>
        {navActive ?
          <>
            <NavList>
              Info
              <NavListItem>1010 W Boulevard</NavListItem>
              <NavListItem>Los Angeles, California</NavListItem>
              <NavListItem>90026 – 3333</NavListItem>
              <NavListItem>information@https://monksearth.com/</NavListItem>
              <NavListItem>+1 323 111 1111</NavListItem>
              <NavListItem>@monks</NavListItem>
              <NavListItem>Subscribe to newsletter</NavListItem>
              <NavListItem>Terms & Shipping </NavListItem>
            </NavList>
            <ThreeDotButton onClick={() => setNavActive(navActive => !navActive)}>...
          </ThreeDotButton>
          </>
          :
          <ThreeDotButton onClick={() => setNavActive(navActive => !navActive)}>...
          </ThreeDotButton>
        }

        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          cart
        </MenuLink>
      </Container>
    </Wrapper >
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
