import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, colors } from '../../utils/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  margin: 0 auto;
  width:92vw;
  max-width: 1010px;
`

export const MenuLink = styled(Link)`
font-weight: bold;
text-align:right;
display:flex;
text-decoration: none;
@media (max-width: ${breakpoints.s}px) {
flex-direction: column;
}
&:hover {
  color:black;
}
`
export const MenuLinkTitle = styled(Link)`
  text-decoration: none;
    font-family:MonumentGrotesk-Medium;
  @media (max-width: ${breakpoints.s}px) {
  }
  &:hover {
    color:black;
  } `

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
  align-items: left;
  justify-content: start;
`

export const MidContainer = styled.div`
  width:20vw;
`
