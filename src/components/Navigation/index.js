import React, { useContext, useEffect, useState, useRef } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { UsePageState } from '~/context/pageContext'
import styled from '@emotion/styled'
import { Container, StartContainer, MidContainer, EndContainer, LogoImage, MenuLinkTitle, NavList, NavListItem, MenuLinkBag } from './styles'
import BlackLogo from './monksLogoBlack.svg';

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
  position:fixed;
  top: 0;
  z-index:2;
  background: #fff;
  margin:0 auto;
  margin-bottom: 1.45rem;
  max-height:250px;
  width:100%;
  max-width:910px;
  width: calc(100% - 2rem);
  `

  return (
    <>
      <Container>
        <StartContainer>
          < MenuLinkTitle to="/">
            <LogoImage alt="monks logo" src={BlackLogo} />
          </MenuLinkTitle>
        </StartContainer>

        <Wrapper >
          <MidContainer>
            <NavList>
              <NavListItem>
                < MenuLinkTitle to="/about">About</MenuLinkTitle>
              </NavListItem>
              <NavListItem>
                < MenuLinkTitle to="https://www.instagram.com/monks/">@monks</MenuLinkTitle></NavListItem>
              <NavListItem>
                < MenuLinkTitle to="/about#ingredients">Ingredients Glossary</MenuLinkTitle></NavListItem>
              <NavListItem>
                {hasItems ? <MenuLinkBag to="/cart"><>{`${quantity} — `}</>
                  Bag
            </MenuLinkBag> : <MenuLinkTitle to="/cart">Bag</MenuLinkTitle>}
              </NavListItem>
            </NavList>
          </MidContainer>
        </Wrapper >
      </Container>
    </>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
