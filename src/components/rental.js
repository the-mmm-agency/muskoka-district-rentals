import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import transitions from 'theme/transitions'
import { rhythm } from 'theme/typography'

const ListItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: ${rhythm(1 / 2)};
`

const LineItem = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  width: auto;
`

const RentalImg = styled(Img)`
  &:hover {
    opacity: 1;
  }
  width: 180px;
  height: 130px;
  position: relative;
  margin: auto;
  opacity: 0.5;
  transition: ${transitions.create('opacity')};
`

const Rental = ({ image, name, startFrom, onMouseOver }) => {
  return (
    <ListItem onMouseOver={onMouseOver} onFocus={onMouseOver}>
      <LineItem>
        Starting from $<strong>{startFrom}/night</strong>
      </LineItem>
      <RentalImg fluid={image.childImageSharp.fluid} />
      <LineItem border>{name}</LineItem>
    </ListItem>
  )
}

Rental.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  startFrom: PropTypes.number.isRequired,
}

export default Rental
