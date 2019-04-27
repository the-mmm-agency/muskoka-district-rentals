import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { rhythm } from 'theme/typography'

const ListItem = styled.li`
  &:hover {
    opacity: 1;
  }
  color: #fff;
  display: flex;
  flex-direction: column;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  margin: ${rhythm(1 / 2)};
  transition: opacity ease 0.3s;
`

const Rental = ({ image, name, startFrom, onMouseOver, selected }) => {
  return (
    <ListItem onMouseOver={onMouseOver} selected={selected}>
      <span>
        Starting from <strong>{startFrom}</strong>
      </span>
      <Img fluid={image.childImageSharp.fluid} />
      <span>{name}</span>
    </ListItem>
  )
}

export default Rental
