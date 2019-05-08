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

const LineItem = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  width: auto;
`

const RentalImg = styled(Img)`
  width: 180px;
  height: 130px;
  position: relative;
  margin: auto;
`

const Rental = ({ image, name, startFrom, onMouseOver, selected }) => {
  return (
    <ListItem onMouseOver={onMouseOver} selected={selected}>
      <LineItem>
        Starting from $<strong>{startFrom}/night</strong>
      </LineItem>
      <RentalImg fluid={image.childImageSharp.fluid} />
      <LineItem border>{name}</LineItem>
    </ListItem>
  )
}

export default Rental
