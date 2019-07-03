import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Rates = ({ rates }) => (
  <table>
    <thead>
      <tr>
        <th>rate period</th>
        <th>daily</th>
        <th>weekly</th>
        <th>monthly</th>
      </tr>
    </thead>
    <tbody>
      {rates.seasonPrices.map(({ price, season }) => (
        <tr key={season[0].title}>
          <td>
            {season[0].title}
            <br />
            {season[0].startDate} - {season[0].endDate}
          </td>
          <td>${price.prices[0]}</td>
          <td>
            ${price.prices.length > 1 ? price.prices[1] : price.prices[0] * 7}
          </td>
          <td>
            ${price.prices.length > 2 ? price.prices[2] : price.prices[0] * 30}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

Rates.propTypes = {
  rates: PropTypes.shape({
    seasonPrices: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.shape({
          prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        }).isRequired,
        season: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export const query = graphql`
  fragment Rates on wordpress__wp_mphb_room_type {
    rates {
      seasonPrices {
        price {
          prices
        }
        season {
          days
          startDate
          endDate
          title
        }
      }
    }
  }
`

export default Rates
