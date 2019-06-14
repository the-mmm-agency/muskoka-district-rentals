import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Link from 'components/link'

const ConciergeService = ({ title, slug, featured_media, setSelected }) => (
  <li
    css={{
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
    }}
    p={2}
    onMouseOver={() => setSelected(featured_media)}
    onFocus={() => setSelected(featured_media)}
  >
    <Link
      display="inline-flex"
      alignItems="center"
      width="100%"
      bg="transparent"
      to={slug}
      fade
      duration={0.5}
    >
      <Img
        width="12.5rem"
        minWidth="12.5rem"
        maxWidth="12.5rem"
        minHeight="8rem"
        maxHeight="8rem"
        fluid={featured_media.localFile.childImageSharp.fluid}
      />
      <h6 fontSize={4} ml={4}>
        {title}
      </h6>
    </Link>
  </li>
)

export const query = graphql`
  fragment ConciergeService on wordpress__wp_concierge_services {
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    slug
    title
    id
  }
`

ConciergeService.propTypes = {
  featured_media: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ConciergeService
