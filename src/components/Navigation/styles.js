import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, colors } from '../../utils/styles'

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  max-width: 1010px;
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
  background:${colors.colorMagenta};
  padding:0 1rem;
  text-decoration: none;
  border-left:solid .15rem #8A1B61;
  border-right:solid .15rem #8A1B61;
  border-bottom:solid .15rem #8A1B61;
  @media (max-width: ${breakpoints.s}px) {
  flex-direction: column;
  }
  &:hover {
    color:${colors.colorMagenta};
    background:#fff;
  }
`

export const MenuLinkTitle = styled(Link)`
display:flex;
flex-direction:column;
  text-decoration: none;
    font-family:MonumentGrotesk-Medium;
    color:black;
    margin:auto;
  @media (max-width: ${breakpoints.s}px) {
    font-size:.6rem;
  }
  &:hover {
    color:black;
  } `



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
  max-width:200px;
  width:35vw;
  margin:auto;
  padding:0 0 .5rem 0;
`

export const NavList = styled.ul`
  padding:0;
  margin:0;
  display:flex;
  width:100%;
  display:flex;
  justify-content:space-evenly;
`

export const NavListLarge = styled.ul`
  padding:0;
  margin:0;
  display:flex;
  width:100%;
  display:flex;
  justify-content:space-evenly;
  @media (max-width: ${breakpoints.s}px) {
    display:none;
    }  
`

export const NavListSmall = styled.ul`
  padding:0;
  margin:0;
  display:flex;
  width:100%;
  justify-content:space-evenly;
  display:none;
  @media (max-width: ${breakpoints.s}px) {
    display:flex;
    }  
`

