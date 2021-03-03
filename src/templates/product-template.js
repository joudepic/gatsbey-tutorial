import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ComponentName = ({ data: {product: {title, price, image, info: {info}}} }) => {

    let imageUrl = getImage(image)

    return(
        <Layout>
            <div style={{textAlign: 'center'}}>
                <Link to="/products">Back to products</Link>
                <h1>single product: {title}</h1>
            </div>
            <section className="single-product">
                <article>
                    <GatsbyImage image={imageUrl} alt={title} />
                </article>

                <article>
<h1>{title}</h1>
<h3>${price}</h3>
<p>{info}</p>
<button>Add to cart</button>
                </article>

            </section>
        </Layout>
    )
}

export const query = graphql`
  query GetSingleProduct($slug: String){
    product: contentfulProduct(slug: {eq: $slug}) {
      price
      title
      info {
        info
      }
      image {
        gatsbyImageData(width: 300)
      }
    }
  }
`

export default ComponentName
