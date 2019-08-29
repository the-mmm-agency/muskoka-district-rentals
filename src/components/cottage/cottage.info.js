import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HomeOutline as House } from 'styled-icons/typicons/HomeOutline'
import { PersonOutline as Guest } from 'styled-icons/material/PersonOutline'
import { Bed } from 'styled-icons/boxicons-regular/Bed'
import { Ruler } from 'styled-icons/boxicons-regular/Ruler'
import { Cat as Pet } from 'styled-icons/fa-solid/Cat'

import { List, Item } from './cottage.info.css'

const CottageInfo = ({
  size,
  category,
  guests,
  bedrooms,
  suitability,
  ...props
}) => (
  <List {...props}>
    {[
      size ? [<Ruler key={0} />, 'Square Feet', `${size} sqft`] : null,
      category ? [<House key={1} />, 'Property', category.name] : null,
      guests ? [<Guest key={2} />, 'Sleeps', guests] : null,
      bedrooms ? [<Bed key={3} />, 'Bedrooms', bedrooms] : null,
      suitability
        ? [
            <Pet key={4} />,
            'Pet Friendly',
            suitability.includes('Pets') ? 'Yes' : 'No',
          ]
        : null,
    ].map(attribute =>
      attribute !== null ? (
        <Item key={attribute[1]}>
          {attribute[0]}
          <span>{attribute[1]}&nbsp;</span>
          <span>{attribute[2]}</span>
        </Item>
      ) : null
    )}
  </List>
)

export const query = graphql`
  fragment CottageInfo on wordpress__wp_property {
    category {
      name
    }
    bedrooms
    guests
    size
  }
`

CottageInfo.propTypes = {
  bedrooms: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  guests: PropTypes.string,
  size: PropTypes.string,
  suitability: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default CottageInfo
