import dayjs from 'dayjs'
import { curry, map } from 'ramda'
import utcPlugin from 'dayjs-plugin-utc'

dayjs.extend(utcPlugin)

const checkIfBooked = (day, bookedDate) =>
  day.isSame(bookedDate, 'day') && day.isSame(bookedDate, 'month')

const dateToLocal = date =>
  dayjs
    .utc(date * 1000)
    .local()
    .add(1, 'day')

export const getBookedDates = map(dateToLocal)

export const isBooked = (bookedDates, day) => {
  const booked = getBookedDates(bookedDates)
  return booked
    .map(
      bookedDate =>
        checkIfBooked(dayjs(day), bookedDate) ||
        checkIfBooked(dayjs(day), bookedDate.add(1, 'day'))
    )
    .includes(true)
}

export const isStart = (bookedDates, day) =>
  isBooked(bookedDates, day) &&
  !isBooked(bookedDates, dayjs(day).subtract(1, 'day'))

export const isEnd = (bookedDates, day) =>
  isBooked(bookedDates, day) && !isBooked(bookedDates, dayjs(day).add(1, 'day'))
