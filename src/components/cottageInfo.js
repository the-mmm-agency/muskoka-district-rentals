import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const List = styled.ul`
  width: 100%;
  margin-top: 4;
  margin-left: 0;
  list-style: none;
  li {
    margin-bottom: 1;
    span {
      &:first-of-type {
        color: textSecondary;
      }
      &:last-of-type {
        color: textPrimary;
      }
      font-weight: bold;
    }
  }
`

const CottageInfo = ({ attributes, ...props }) => (
  <List {...props}>
    {attributes.map(attribute => (
      <li key={attribute.name}>
        <span>{attribute.name}:&nbsp;</span>
        <span>{attribute.value}</span>
      </li>
    ))}
  </List>
)

CottageInfo.propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default CottageInfo
