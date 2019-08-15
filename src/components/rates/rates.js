import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Rates = ({ night_price, priceWeek, priceMonthly }) => (
  <table>
    <thead>
      <tr>
        <th>daily</th>
        <th>weekly</th>
        <th>monthly</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{night_price}</td>
        <td>{priceWeek}</td>
        <td>{priceMonthly}</td>
      </tr>
    </tbody>
  </table>
)

Rates.propTypes = {
  night_price: PropTypes.string.isRequired,
  priceMonthly: PropTypes.string.isRequired,
  priceWeek: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment Rates on wordpress__wp_listing {
    priceWeek
    priceMonthly
    night_price
  }
`

export default Rates
