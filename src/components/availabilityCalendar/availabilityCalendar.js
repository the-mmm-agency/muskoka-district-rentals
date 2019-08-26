import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { isBooked, isStart, isEnd } from 'util/bookedDates'
import Calendar from 'styles/calendar.css'

const AvailabilityCalendar = ({ bookedDates }) => (
  <Calendar
    modifiers={{
      selected: day => isBooked(bookedDates, day),
      start: day => isStart(bookedDates, day),
      end: day => isEnd(bookedDates, day),
    }}
    numberOfMonths={2}
    interactionDisabled
  />
)

AvailabilityCalendar.propTypes = {
  bookedDates: PropTypes.arrayOf(PropTypes.number.isRequired),
}

export const query = graphql`
  fragment Calendar on wordpress__wp_property {
    bookedDates
  }
`

export default AvailabilityCalendar
