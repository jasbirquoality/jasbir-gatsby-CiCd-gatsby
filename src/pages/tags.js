import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'
import setupTag from '../utils/setupTags'
import Seo from "../components/SEO"

const Tags = ({data}) => {
    const newTag = setupTag(data.allContentfulRecipe.nodes)
    return (
        <Layout>
            <Seo title='Tags'/>
            <main className='page'>
                <section className='tags-page'>
                    {
                        newTag.map((tag, index) => {
                            const [text, value] = tag
                            return (
                                <Link to={`/${text}`} key={index} className='tag'>
                                <h5>{text}</h5>
                                <p>{value} Recipe</p>
                                </Link>
                            )
                        })
                    }
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
