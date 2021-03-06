import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import slugify from 'slugify'

const RecipesList = ({recipes=[]}) => {
    
    return (
        <div className='recipes-list'>
            {
                recipes.map(recipe => {
                    const {id, title, image, prepTime, cookTime} = recipe
                    const pathToImage = getImage(image);
                    const slug = slugify(title, {
                        lower: true
                    })
                    return (
                        <Link key={id} to={`/${slug}`} className='recipe'>
                            <GatsbyImage image={pathToImage} alt={title} className='recipe-img'/>
                            <h5>{title}</h5>
                            <p>Prep: {prepTime}min | Cook: {cookTime}min</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RecipesList
