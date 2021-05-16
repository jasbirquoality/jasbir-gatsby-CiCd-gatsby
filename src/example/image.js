import React from 'react'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image';

const Image = () => {
    return (
      <Wrapper>
        <>
          <StaticImage src="../assets/images/big.webp" alt="static food" />
        </>
        <h2>Gatsby Images</h2>
      </Wrapper>
    )
}

const Wrapper = styled.section`

    img{
       
    }

`

export default Image
