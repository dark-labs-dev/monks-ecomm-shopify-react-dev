import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, colors } from '../../utils/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 0;
  margin: 0 auto;
`

export const MenuLink = styled(Link)`
font-weight: bold;
text-align:right;
@media (max-width: ${breakpoints.s}px) {
}
`
export const MenuLinkTitle = styled(Link)`
text-decoration: none;
    font-family:MonumentGrotesk-Medium;
  @media (max-width: ${breakpoints.s}px) {
  }
  `

export const CartCounter = styled.span`
  float: right;
  z-index: 20;
  padding:0 1rem;
`

export const NavList = styled.ul`
  padding:0;
  margin:0;
`

export const NavListItem = styled.li`
  line-height:1.8rem;
`

export const ThreeDotButton = styled.div`
  cursor:pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`