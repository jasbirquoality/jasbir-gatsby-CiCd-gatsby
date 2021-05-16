import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout';
import {ExampleButton} from '../example/button';
import Seo from '../components/SEO'

const Error = () => {
    return (
      <Layout>
        <Seo title="Error"/>
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h2>Page Not Found!</h2>
            <Link to="/">
              <ExampleButton>Go To Home</ExampleButton>
            </Link>
          </section>
        </main>
      </Layout>
    )
}

export default Error
