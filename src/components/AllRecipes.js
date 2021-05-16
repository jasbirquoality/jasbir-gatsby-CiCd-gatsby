import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import {useStaticQuery, graphql} from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        cookTime
        prepTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {

    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;
    //console.log(recipes)

    return (
      <section className='recipes-container'>
        <TagsList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </section>
    )
}

export default AllRecipes
