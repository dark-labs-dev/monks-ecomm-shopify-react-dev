import React, { useContext, useEffect, useState, useRef } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { UsePageState } from '~/context/pageContext'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../../utils/styles'
import { CartCounter, Container, StartContainer, MidContainer, EndContainer, LogoImage, MenuLinkTitle, MenuLink, NavListSmall,NavListLarge,NavList, NavListItem, ThreeDotButton,MenuLinkBag } from './styles'
import LifeLogo from './lifeLogo'
import ControlledLottie from './controlledLottie'
import GridTextured from './gridTexture.svg'
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
  const [logoActive, setLogoActive] = useState(false);

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
    background: #fff;
    margin:0 1rem;
    margin-bottom: 1.45rem;
    position:fixed;
    z-index:2;
    top: 0;
    max-height:250px;
    // width:calc(100% - 1rem);
    width:100%;
  `

  return (
    <>
      <Container>
        <StartContainer>
          < MenuLinkTitle to="/">
            <LogoImage alt="monks logo" src={BlackLogo} />
          INNOVATION INSPIRED BY NATURE</MenuLinkTitle>
        </StartContainer>
      </Container>

      <Wrapper >

        <MidContainer>
          {/* < MenuLinkTitle to="/about">About</MenuLinkTitle>
          {navActive && */}
          <NavListLarge>
              <NavListItem>< MenuLinkTitle to="/about">About</MenuLinkTitle></NavListItem>
              <NavListItem>< MenuLinkTitle to="/about">Los Angeles, California</MenuLinkTitle></NavListItem>
              <NavListItem>< MenuLinkTitle to="https://www.instagram.com/monks/">@monks</MenuLinkTitle></NavListItem>
              <NavListItem>< MenuLinkTitle to="/about">Subscribe to newsletter</MenuLinkTitle></NavListItem>
              <NavListItem>< MenuLinkTitle to="/about">Terms & Shipping </MenuLinkTitle></NavListItem>
              <NavListItem>{hasItems && <MenuLinkBag to="/cart"><>{`${quantity} — `}</>
                  Bag
            </MenuLinkBag>}
              </NavListItem>
          </NavListLarge>

          <NavListSmall>
              <NavListItem> < MenuLinkTitle to="/about">About</MenuLinkTitle></NavListItem>
              <NavListItem>LA, Ca</NavListItem>
              <NavListItem>@monks</NavListItem>
              <NavListItem>Newsletter</NavListItem>
              <NavListItem>T & S </NavListItem>
              <NavListItem>{hasItems && <MenuLinkBag to="/cart"><>{`${quantity} — `}</>
                  Bag
            </MenuLinkBag>}
              </NavListItem>
          </NavListSmall>
          {/*  <ThreeDotButton onClick={() => setNavActive(navActive => !navActive)}>...
           </ThreeDotButton>
            </>
             :
               <ThreeDotButton onClick={() => setNavActive(navActive => !navActive)}>...
             </ThreeDotButton>
          } */}
          {/* <MenuLink to="/cart">
            {hasItems && <>{`${quantity} — `}</>}
          Bag
        </MenuLink> */}
        </MidContainer>

        {/* <EndContainer>
        </EndContainer> */}

      </Wrapper >
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
