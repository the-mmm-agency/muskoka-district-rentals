import React from 'react'
import PropTypes from 'prop-types'

const CottageInfo = ({ attributes }) => (
  <ul
    css={{
      li: {
        color: 'text.light',
        marginBottom: 1,
      },
      fontWeight: 'bold',
      marginTop: 4,
      marginLeft: 0,
      listStyle: 'none',
      width: '100%',
    }}
  >
    {attributes.map(attribute => (
      <li key={attribute.name}>
        <span color="text.primary" fontWeight="bold">
          {attribute.name}:&nbsp;
        </span>
        <span>{attribute.value}</span>
      </li>
    ))}
  </ul>
)

CottageInfo.propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default CottageInfo
