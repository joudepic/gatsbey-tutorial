import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
    {
        site {
            info: siteMetadata {
                author
                data
                description
                title
                person {
                    name
                    age
                }
            }
        }
    }
`

const Header = () => {

    const {site: {info: {title, person: {name}}}} = useStaticQuery(getData)

    return (
        <div>
            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
        </div>
    )
}

export default Header