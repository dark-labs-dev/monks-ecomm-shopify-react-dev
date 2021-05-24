import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, colors } from '../../utils/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  max-width: 1010px;
  overflow-x:hidden;
  padding:1rem;
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
    font-size:.6rem;
  }
  &:hover {
    color:black;
  } `


export const NavList = styled.ul`
  padding:0;
  margin:0;
`

export const NavListItem = styled.li`
  line-height:1.5rem;
  @media (max-width: ${breakpoints.s}px) {
  } 
`


export const ThreeDotButton = styled.div`
  cursor:pointer;
  display: flex;
  align-items: left;
  justify-content: start;
`

export const StartContainer = styled.div`
  height:100%;
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  padding-right: 1rem;
}`

export const MidContainer = styled.div`
  width:40%;
`
export const EndContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  width:10%;
  text-align:right;
`

export const LottieContainer = styled.div`
  width:60%;
`
