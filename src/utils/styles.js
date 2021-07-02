import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import "~/assets/fonts.css"

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}
export const colors = {
  background: "#8A1B61",
  color0: "#8A1B61",
  color1: "#8A1B61",
  colorMagenta:'#8A1B61'
}
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
    html {
      font-family: MonumentGrotesk-Regular;
      background:#fff;
      overflow-x:hidden;
      max-width:100%;
      min-height:100vh; 
     }
    
    body {
        margin: 0;
        width:100%;
        height:100%;    
      }

      a {
        font-family: MonumentGrotesk-Regular;
        color:#fff;
        text-decoration: none;
        font-weight:normal;
        &:hover {
        color:${colors.color1};
        }
        @media (max-width: ${breakpoints.s}px) {
        }
      }
      
      h1,h2,h3 {
        font-family: MonumentGrotesk-Medium;
        font-weight:initial;
      }

      h1{
        font-size:1.2rem;
      }

      h2{
        font-size:1rem;
      }

      ul{
        list-style-type:none;
        margin:0;
        padding:0;
      }

      li {
        font-size: .8rem;
        list-style-type: none;
        margin: 0;
        margin-bottom: .25rem;
        padding: 0;
    }
      
      input{
        cursor:pointer;   
      }
      button{
        cursor:pointer;   
        font-size:1rem;
        border:none;
        background:transparent;
        text-decoration:underline;  
        &:hover {
          color: ${colors.color1};
        }
      }

    `}
  />
)

export const HomeImg = styled(Image)`
  max-width: 100%;
   max-height: 600px;
   // margin:0 6rem;
   margin-bottom: 1.45rem;
   object-fit: contain;

   `

export const HomeImageUi = styled.div`
   height:100%;
   display:flex;
   justify-content: flex-end;
   `

export const Img = styled(Image)`
   max-width: 100 %;
   margin-left: 0;
   margin-right: 0;
   margin-top: 0;
   padding-bottom: 0;
   padding-left: 0;
   padding-right: 0;
   padding-top: 0;
   margin-bottom: 1.45rem;
   object-fit: contain;
   `

export const Container = styled.div`
  display: flex;
  margin-top:2rem;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: ${breakpoints.l}px) {
    // margin-top: 60vh;
  }
  @media (max-width: ${breakpoints.s}px) {
  // margin-top: 200px;
}
@media (max-height: 400px) {
  // margin-top: 300px;
}
`

export const CartContainer = styled.div`
  margin: 0 auto;
  max-width: 910px;
  min-height:calc(100vh - 140px);
  margin-top:80px;
  padding: auto 1rem;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 2fr 2rem 3fr;
  grid-template-rows: auto;
  grid-template-areas: 'left . center . right';
  width: 100%;
  max-width:1500px;
  margin:auto;
  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridCenter = styled.div`
  grid-area: center;
  @media (max-width: ${breakpoints.l}px) {
    max-height: 70vh;
    overflow-y: scroll;
    display: block;
  }
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
