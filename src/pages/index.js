import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import SEO from '~/components/seo'
import ProductGridRow from '~/components/ProductRow'
import { UsePageDispatch } from '~/context/pageContext'
import HeroImage from '../components/HeroImage'
import Footer from '../components/footer'

function PageCheck() {
  const PageDispatch = UsePageDispatch()
  useEffect(() => {
    PageDispatch({ type: 'UpdatePage', payload: "home" })
  }, [])
  return (<>
  </>)
}


const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageCheck />
    <HeroImage />
    <br />
    <ProductGridRow />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Footer />
  </>
)

export default IndexPage
