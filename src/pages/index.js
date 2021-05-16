import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Seo from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description='home page' />
      <main className="page">
        <header className="hero">
          <StaticImage 
            src='../assets/images/main.jpeg'
            alt='eggs'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          />
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
      <AllRecipes ></AllRecipes>
      </main>
    </Layout>
  )
}
