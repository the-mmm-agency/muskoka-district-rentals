import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Bed } from 'styled-icons/boxicons-regular/Bed'

const Beds = ({ accomodation }) => (
  <table>
    <thead>
      <tr>
        <th>Room Type</th>
        <th>Bed Type</th>
        <th>Accommodates</th>
      </tr>
    </thead>
    <tbody>
      {accomodation.map(
        ({
          acc_bedroom_name: room_type,
          acc_bedroom_type: bed_type,
          acc_guests: guests,
          acc_no_of_beds: beds,
        }) => (
          <tr key={room_type}>
            <td>
              <Bed />
              {room_type}
            </td>
            <td>{bed_type}</td>
            <td>{guests}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
)

Beds.propTypes = {
  accomodation: PropTypes.arrayOf(
    PropTypes.shape({
      acc_bedroom_name: PropTypes.string.isRequired,
      acc_bedroom_type: PropTypes.string.isRequired,
      acc_guests: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Beds on wordpress__wp_listing {
    accomodation {
      acc_bedroom_name
      acc_bedroom_type
      acc_guests
    }
  }
`

export default Beds
