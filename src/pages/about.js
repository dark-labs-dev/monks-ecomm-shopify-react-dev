import React, { useEffect } from 'react'

import SEO from '~/components/seo'
import { UsePageDispatch } from '~/context/pageContext'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../utils/styles'
import Footer from '../components/footer'

const AboutPage = styled.div`
  display: grid;
  grid-template-column: repeat(1, 1fr);
  gap: 2.5rem;
  padding:0;
  padding:0 1rem;
  padding-top:250px;
  height:100vh;
  @media (max-width: ${breakpoints.l}px) {
  // padding: 250px  1rem 0 1rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    // padding: 300px  1rem 0 1rem;
    }
`

function PageCheck() {
  const PageDispatch = UsePageDispatch()
  useEffect(() => {
    PageDispatch({ type: 'UpdatePage', payload: "home" })
  }, [])
  return (<>
  </>)
}

const About = () => (
  <>
    <AboutPage>
      <PageCheck />
      <SEO title="About" />
      <h2>About</h2>
      <p>Monks was born from a desire for quality, essential, non-toxic body products that simply work. With a genderless approach to quality and innovation inspired by nature, we develop effective formulas with as few ingredients as possible in order to respect your body and the planet. From our all-natural fragrance blends to our application mechanisms, every aspect of our collection and its design has been meticulously conceived to enhance your personal care ritual. With Monks, you can take more intentional care of yourself and experience the peace of mind that comes with knowing you can trust what is inside the things you put on your body.</p>

      <br />
      <h2 id="ingredients">Ingredients Glossary</h2>
      <p>Coming soon.</p>
    </AboutPage>
    <Footer />
  </>)

export default About
