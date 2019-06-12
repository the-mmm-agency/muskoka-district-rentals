import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const GuestService = ({ image, body, name }) => (
  <li display="flex" mb={2}>
    <div display="inline-block" verticalAlign="top">
      <Img fixed={image.childImageSharp.fixed} />
    </div>
    <div display="inline-block" verticalAlign="top" ml={3}>
      <h4 variant="bold" mb={1} fontSize={5}>
        {name}
      </h4>
      <p color="text.secondary" fontWeight="medium" mb={3}>
        {body}
      </p>
    </div>
  </li>
)

export const query = graphql`
  fragment GuestService on GuestServicesJson {
    image {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    body
    name
    id
  }
`

GuestService.propTypes = {
  body: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default GuestService
