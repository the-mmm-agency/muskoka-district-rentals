import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import Link from 'components/link'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: transparent;
`

const Image = styled(Img)`
  width: 30%;
  max-height: 120px;
`

const ConciergeService = ({ name, link, image, setSelected }) => (
  <li
    css={{
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
    }}
    p={2}
    onMouseOver={() => setSelected(image)}
    onFocus={() => setSelected(image)}
  >
    <StyledLink to={link} fade duration={0.5}>
      <Image fluid={image.childImageSharp.fluid} />
      <h5 ml={4}>{name}</h5>
    </StyledLink>
  </li>
)

ConciergeService.propTypes = {
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default ConciergeService
