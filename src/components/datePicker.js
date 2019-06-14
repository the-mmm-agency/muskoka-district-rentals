import React from 'react'
import PropTypes from 'prop-types'

import Calendar from 'components/calendar'

const DatePicker = ({ open, from, to, handleDayClick }) =>
  open && (
    <Calendar
      css={{
        position: 'absolute',
        zIndex: 9000,
      }}
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={{ start: from, end: to }}
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
