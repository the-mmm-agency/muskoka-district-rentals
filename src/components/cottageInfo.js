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
      width: '100%',
    }}
  >
    {attributes.map(attribute => (
      <li key={attribute.name}>
        <span color="text.primary" fontWeight="bold">
          {attribute.name}:&nbsp;
        </span>
        <span>{attribute.options[0]}</span>
      </li>
    ))}
  </ul>
)

CottageInfo.propTypes = {
  accommodates: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['Available', 'Unavailable']).isRequired,
  suitablePets: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

export default CottageInfo
