import React from 'react'
import PropTypes from 'prop-types'

import Text from 'elements/text'

const CottageInfo = ({
  status,
  size,
  type,
  accommodates,
  bedrooms,
  bathrooms,
  suitablePets,
}) => (
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
    <li>
      Status:{' '}
      {status === 'Available' ? (
        <Text color="secondary">Available</Text>
      ) : (
        'Unavailable'
      )}
    </li>
    <li>
      Square Feet:{' '}
      <Text color="text.primary" fontWeight="bold">
        {size} sqft
      </Text>
    </li>
    <li>
      Property:{' '}
      <Text color="text.primary" fontWeight="bold" textTransform="capitalize">
        {type}
      </Text>
    </li>
    <li>
      Sleeps:{' '}
      <Text color="text.primary" fontWeight="bold">
        {accommodates}
      </Text>
    </li>
    <li>
      Beds:{' '}
      <Text color="text.primary" fontWeight="bold">
        {bedrooms}
      </Text>
    </li>
    <li>
      Bathrooms:{' '}
      <Text color="text.primary" fontWeight="bold">
        {bathrooms}
      </Text>
    </li>
    <li>
      Pet Friendly:{' '}
      <Text color="text.primary" fontWeight="bold">
        {suitablePets ? 'Yes' : 'No'}
      </Text>
    </li>
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
