import React from 'react'
import styled from '@emotion/styled'
import { darken, transparentize } from 'polished'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import palette from 'theme/palette'
import { rhythm } from 'theme/typography'
import shadows from 'theme/shadows'

const StyledDayPicker = styled(DayPicker)`
  box-shadow: ${shadows[1]};
  background-color: white;
  border: 1px solid #e4e5ec;
  width: 100%;
  border-radius: 4px;
  position: absolute;
  padding-bottom: ${rhythm(1 / 2)};
  z-index: 9000;
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${transparentize(0.1, palette.primary)};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    &:hover {
      background-color: ${darken(0.2, palette.primary)};
    }
    background-color: ${palette.alt};
    border-radius: 0px;
    color: white;
  }
  .DayPicker-Months {
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
  .DayPicker-Day {
    color: ${palette.text.primary};
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
  .DayPicker-Weekday {
    color: ${palette.text.secondary};
    font-weight: bold;
    font-style: bold;
    text-transform: uppercase;
  }
  .DayPicker-Caption {
    text-align: center;
    font-weight: 500;
    margin-bottom: ${rhythm(1)};
    color: ${palette.text.primary};
  }
  .DayPicker-Day--start {
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
    background-color: ${palette.primary} !important;
  }
  .DayPicker-Day--end {
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
    background-color: ${palette.primary} !important;
  }
  .DayPicker-wraper {
    padding-bottom: 0;
  }
`

const DatePicker = ({ open, from, to, handleDayClick }) => {
  const modifiers = { start: from, end: to }
  if (!open) {
    return null
  }
  return (
    <StyledDayPicker
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={modifiers}
      onDayClick={handleDayClick}
    />
  )
}

DatePicker.propTypes = {
  from: PropTypes.string.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
}

export default DatePicker
