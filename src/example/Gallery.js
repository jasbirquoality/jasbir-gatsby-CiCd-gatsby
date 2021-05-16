import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled from 'styled-components'


const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            height:200
            width:200
          )
        }
      }
    }
  }
`
const Gallery = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes
    return (
        <Wrapper>
            {
                nodes.map((image, index) => {
                    const {name, childImageSharp:{gatsbyImageData}} = image
                    const pathToImages = getImage(image)
                    return (
                        <article key={index} className='item'>
                            <GatsbyImage image={pathToImages || gatsbyImageData} alt={name} className='gallery-img'/>
                            <p>{name}</p>
                        </article>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;

    .item {
        margin-right: 1rem;
    }

    .gallery-img{
        border-top-right-radius: 1rem;
        border-bottom-left-radius:1rem;
    }

`

export default Gallery
