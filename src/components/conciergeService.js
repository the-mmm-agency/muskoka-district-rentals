import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { rhythm, scale } from 'theme/typography'
import Link from 'components/link'

const Wrapper = styled.li`
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  padding: ${rhythm(1 / 3)};
`

const StyledLink = styled(Link)`
  h4 {
    ${scale(1 / 4)};
    margin-left: ${rhythm(2)};
  }
  align-items: center;
  background: transparent;
  display: inline-flex;
  width: 100%;
`

const Image = styled(Img)`
  max-height: 120px;
  width: 30%;
`

const ConciergeService = ({ name, link, image, setSelected }) => (
  <Wrapper
    onMouseOver={() => setSelected(image)}
    onFocus={() => setSelected(image)}
  >
    <StyledLink to={link} fade duration={0.5}>
      <Image fluid={image.childImageSharp.fluid} />
      <h4>{name}</h4>
    </StyledLink>
  </Wrapper>
)

ConciergeService.propTypes = {
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default ConciergeService
