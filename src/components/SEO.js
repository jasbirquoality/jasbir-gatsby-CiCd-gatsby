import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({title, description}) => {
    const {site} = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet title={`${title} | ${site.siteMetadata.title}`}
            meta={[{name: `description`, content:metaDescription}]}
            htmlAttributes={
                {lang : 'en'}
            }
        >    
        </Helmet>
    )
}

export default SEO
