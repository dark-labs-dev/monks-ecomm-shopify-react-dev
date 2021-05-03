import React, { useContext, useEffect, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { UsePageState } from '~/context/pageContext'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../../utils/styles'
import { CartCounter, Container, MidContainer, MenuLinkTitle, MenuLink, NavList, NavListItem, ThreeDotButton } from './styles'
import LifeLogo from './lifeLogo'

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
  position:fixed;
  z-index:2;
  width:100vw;
  top: 0;
  max-height:250px;
  `

  const TitleContainer = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  `

  return (
    <Wrapper >
      <Container>
        <TitleContainer>
          < MenuLinkTitle to="/">INNOVATION INSPIRED BY NATURE</MenuLinkTitle>
          <LifeLogo />
        </TitleContainer>
        <MidContainer>

          < MenuLinkTitle to="/about">
            About
        </MenuLinkTitle>

          {navActive ?
            <>
              <NavList>
                <NavListItem>Los Angeles, California</NavListItem>
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
        </MidContainer>
        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          Bag
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
