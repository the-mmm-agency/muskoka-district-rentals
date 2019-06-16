import React from 'react'
import PropTypes from 'prop-types'

import Calendar from 'styles/calendar.css'

const DatePicker = ({ from, to, handleDayClick }) => (
  <Calendar
    css={{
      position: 'absolute',
      zIndex: 9000,
    }}
    numberOfMonths={2}
    selectedDays={[from, { from, to }]}
    modifiers={{ start: from, end: to }}
    minWidth="80vw"
    onDayClick={handleDayClick}
  />
)

DatePicker.propTypes = {
  from: PropTypes.string.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
}

export default DatePicker
