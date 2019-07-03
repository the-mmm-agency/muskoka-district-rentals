import React from 'react'
import PropTypes from 'prop-types'

import { List, Item } from './cottageInfo.css'

const CottageInfo = ({ attributes, ...props }) => (
  <List {...props}>
    {attributes.map(attribute => (
      <Item key={attribute.name}>
        <span>{attribute.name}:&nbsp;</span>
        <span>{attribute.value}</span>
      </Item>
    ))}
  </List>
)

CottageInfo.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default CottageInfo
