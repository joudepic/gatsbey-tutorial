import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import * as styles from '../components/products.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby' 

const Products = ({ data }) => {

    const { allContentfulProduct: {nodes: products} } = data

    return(
        <Layout>
            <section className={styles.page}>
                {products.map(product => {
                    let image = getImage(product.image)
                    return (
                        <article key={product.id}>
                            <GatsbyImage alt={product.title} image={image} />
                            <h3>{product.title} <span>${product.price}</span></h3>
                            <Link to={`/products/${product.slug}`}>More Details</Link>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        slug
        title
        id
        image {
          gatsbyImageData
        }
        info {
          info
        }
      }
    }
  }
`

export default Products