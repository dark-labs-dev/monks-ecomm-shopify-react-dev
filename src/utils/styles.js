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
  background: "#CAB64B",
  color0: "#CAB64B",
  color1: "#CAB64B"
}
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        background:#fff;
        // padding: 0 1rem;
        max-width:100vw;
        overflow-x:hidden;
      }
      html {
        font-family: MonumentGrotesk-Regular;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        min-height:100vh;
        width:100%;
      }
      
      a {
        font-family: MonumentGrotesk-Regular;
        color:#fff;
        text-decoration: underline;
        &:hover {
        color:${colors.color1};
        }
        @media (max-width: ${breakpoints.s}px) {
          font-size: .8rem;
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
        font-size: .71rem;
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
`

export const Container = styled.div`
  // max-width: 960px;
  margin-top: 250px;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: ${breakpoints.l}px) {
    padding:0 1rem;
  }
`

export const CartContainer = styled.div`
  margin: 0 auto;
  max-width: 1010px;
  min-height:calc(100vh - 140px);
  margin-top:80px;
  padding: auto 1rem;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';
  width: 100%;

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
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
