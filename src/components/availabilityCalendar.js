import React from 'react'
import { graphql } from 'gatsby'
import { ModifiersUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import Calendar from 'styles/calendar.css'

const getSeasonPrices = rates => rates.flatMap(rate => rate.seasonPrices)
const getSeasons = seasonPrices =>
  seasonPrices.flatMap(seasonPrice => seasonPrice.season)

const AvailabilityCalendar = ({ rates }) => {
  const seasonPrices = getSeasonPrices(rates)
  const seasons = getSeasons(seasonPrices)
  const inRange = day =>
    seasons
      .map(
        ({ days, startDate, endDate }) =>
          ModifiersUtils.dayMatchesModifier(day, { daysOfWeek: days }) &&
          ModifiersUtils.dayMatchesModifier(day, {
            from: new Date(startDate),
            to: new Date(endDate),
          })
      )
      .includes(true)

  const isStart = day =>
    inRange(day) &&
    !inRange(
      dayjs(day)
        .subtract(1, 'day')
        .toDate()
    )

  const isEnd = day =>
    inRange(day) &&
    !inRange(
      dayjs(day)
        .add(1, 'day')
        .toDate()
    )
  const isFirstOfMonth = day => day.getDate() === 1
  const isLastOfMonth = day => day.getDate() === dayjs(day).daysInMonth()
  return (
    <Calendar
      modifiers={{
        selected: inRange,
        start: isStart,
        end: isEnd,
        lastOfMonth: isLastOfMonth,
        firstOfMonth: isFirstOfMonth,
      }}
      numberOfMonths={2}
      interactionDisabled
    />
  )
}

AvailabilityCalendar.propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      rates: PropTypes.shape({
        season: PropTypes.shape({
          days: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
          startDate: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }),
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Calendar on wordpress__wp_mphb_room_type {
    rates {
      seasonPrices {
        season {
          days
          startDate
          endDate
        }
      }
    }
  }
`

export default AvailabilityCalendar
