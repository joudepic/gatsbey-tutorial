import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { StaticImage,GatsbyImage, getImage } from "gatsby-plugin-image"


const getImages = graphql`
    {  
        fixed: file(relativePath: {eq: "image_1.jpg"}) {
            childImageSharp {
                gatsbyImageData(width: 300)
            }
        }
        fluid: file(relativePath: {eq: "image_2.jpeg"}) {
            childImageSharp {
                gatsbyImageData(width: 300)
            }
        }
    }
`

const Images = () => {

    const data = useStaticQuery(getImages)
    const image = getImage(data.fixed)
    const fluidImage = getImage(data.fluid)

    return (
        <section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <StaticImage
                    src="../images/image_3.jpeg"
                    width="100%"
                />
            </article>
            <article className="single-image">
                <h3>fixed image/blur</h3>
                <GatsbyImage image={image} />
            </article>
            <article className="single-image">
                <h3>basic image/svg</h3>
                <GatsbyImage image={fluidImage} />
            </article>
        </section>
    )
}

export default Images
