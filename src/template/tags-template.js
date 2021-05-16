import { graphql } from 'gatsby'
import React from 'react'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

const TagsTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
    const {tag} = pageContext
    return (
      <Layout>
          <Seo title={tag} />
        <main className='page'>
          <h1>{tag}</h1>
          <div className='tag-recipe'>
            <RecipesList recipes={recipes} />
          </div>
        </main>
      </Layout>
    )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagsTemplate
