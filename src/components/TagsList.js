import { Link } from 'gatsby';
import React from 'react'
import setupTags from '../utils/setupTags';

const TagsList = ({recipes=[]}) => {
    const newTag = setupTags(recipes)
    //console.log(newTag)
    return (
        <div className='tag-container'>
            <h4>Recipes</h4>
            <div className='tags-list'>
                {
                    newTag.map((tag, index) => {
                        const [text, value] = tag

                        return (
                            <Link key={index} to={`/${text}`}>
                                {text} ({value})
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagsList
