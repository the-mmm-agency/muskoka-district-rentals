import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { transition } from 'theme/transitions'
import Link from 'components/link'

const ConciergeService = ({ title, slug, featured_media, setSelected }) => (
  <li
    css={css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      ${transition('background-color')}
    `}
    p={2}
    onMouseOver={() => setSelected(featured_media)}
    onFocus={() => setSelected(featured_media)}
  >
    <Link
      css={css`
        display: inline-flex;
        align-items: center;
        background: transparent;
        width: 100%;
      `}
      to={slug}
      fade
      duration={0.5}
    >
      <Img
        css={css`
          width: 12.5rem;
          min-width: 12.5rem;
          max-width: 12.5rem;
          min-height: 8rem;
          max-height: 8rem;
        `}
        fluid={featured_media.localFile.childImageSharp.fluid}
      />
      <h6
        css={css`
          font-size: 4;
          margin-left: 4;
        `}
      >
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
