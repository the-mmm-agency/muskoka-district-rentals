import React from 'react'
import styled from '@emotion/styled'
import { darken, transparentize } from 'polished'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import themeGet from '@styled-system/theme-get'

import 'react-day-picker/lib/style.css'

const StyledDayPicker = styled(DayPicker)`
  position: absolute;
  z-index: 9000;
  width: 100%;
  padding-bottom: ${themeGet('space.1')};
  background-color: white;
  border: 1px solid #e4e5ec;
  border-radius: 4px;
  box-shadow: ${themeGet('shadows.1')};
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${props =>
      transparentize(0.1, props.theme.colors.primary)};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    &:hover {
      background-color: ${props => darken(0.2, props.theme.colors.primary)};
    }
    color: white;
    background-color: ${themeGet('colors.primary')};
    border-radius: 0;
  }
  .DayPicker-Months {
    justify-content: space-evenly;
  }
  .DayPicker-Day {
    padding: 0.5rem 1rem;
    color: ${themeGet('colors.text.primary')};
    font-weight: 500;
  }
  .DayPicker-Weekday {
    color: ${themeGet('colors.text.secondary')};
    font-weight: bold;
    font-style: bold;
    text-transform: uppercase;
  }
  .DayPicker-Caption {
    margin-bottom: ${themeGet('space.2')};
    color: ${themeGet('colors.text.primary')};
    font-weight: 500;
    text-align: center;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--end {
    background-color: ${themeGet('colors.primary')} !important;
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
  }
  .DayPicker-wrapper {
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
