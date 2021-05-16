import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../example/Gallery'
import Seo from "../components/SEO"

const Testing = () => {
    return (
      <Layout>
        <Seo title='Testing'/>
        <main className='page'>
          <Gallery />
        </main>
      </Layout>
    )
}

export default Testing
