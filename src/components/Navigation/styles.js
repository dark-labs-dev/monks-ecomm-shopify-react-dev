import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, colors } from '../../utils/styles'

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  max-width: 910px;
  overflow-x:hidden;
  padding:1rem;
  justify-content: space-between;
  `

export const MenuLink = styled(Link)`
  color:black;
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


export const MenuLinkBag = styled(Link)`
  color:#fff;
  font-weight: bold;
  text-align:right;
  display:flex;
  background:#000;
  padding:0 1rem;
  text-decoration: none;
  border-left:solid .15rem #000;
  border-right:solid .15rem #000;
  border-bottom:solid .15rem #000;
  font-size:1.05rem;
  @media (max-width: ${breakpoints.s}px) {
      flex-direction: column;
    font-size:.85rem;
  }
  &:hover {
    color:#000;
    background:#fff;
  }
`

export const MenuLinkTitle = styled(Link)`
  display:flex;
  flex-direction:column;
  text-decoration: none;
  font-family:MonumentGrotesk-Medium;
  text-weight:normal;
  color:black;
  margin:auto;
  font-size:1.05rem;
  @media (max-width: ${breakpoints.s}px) {
    font-size:.85rem;
  }
  &:hover {
    color:${colors.colorMagenta};
  } `



export const NavListItem = styled.li`
  line-height:1.5rem;
  
  @media (max-width: ${breakpoints.s}px) {
  } 
`

export const StartContainer = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:3rem;
}`

export const MidContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
`
export const EndContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  width:10%;
  text-align:right;
`

export const LogoImage = styled.img`
  max-width:255px;
  width:45vw;
  margin:auto;
  padding:0 0 .5rem 0;
`

export const NavList = styled.ul`
  padding:0;
  margin:0;
  display:flex;
  width:100%;
  display:flex;
  justify-content:space-between;
`