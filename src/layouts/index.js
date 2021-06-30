import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { PageProvider } from '~/context/pageContext'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'


const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: calc(100% - 2rem);
  padding: 0 1rem;
`

const Footer = styled.div`
  display:flex;
  flex-direction: column;
  bottom:0;
  position:relative;
  margin-left:20px;
`

const FooterImg = styled.img`
width:70px;
  `

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <PageProvider>
        <GlobalStyle />
        <StaticQuery
          query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
          render={data => (
            <>
              <Navigation siteTitle={data.site.siteMetadata.title} />
              <Wrapper>
                {children}
              </Wrapper>
              {/* <Footer>
                <FooterImg src="https://cdn.shopify.com/s/files/1/0535/8456/0308/files/monksLogoUdateLast.svg?v=1615055671" />
                © {new Date().getFullYear()}
                {` `}
              </Footer> */}
            </>
          )}
        />
      </PageProvider>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
