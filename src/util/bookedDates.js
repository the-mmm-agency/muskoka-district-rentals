import dayjs from 'dayjs'
import { map, range } from 'ramda'
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
  const booked = map(dateToLocal, bookedDates)
  return booked
    .map(
      bookedDate =>
        checkIfBooked(dayjs(day), bookedDate) ||
        checkIfBooked(dayjs(day), bookedDate.add(1, 'day'))
    )
    .includes(true)
}

export const isBookedInRange = (bookedDates, dates) => {
  const start = dayjs(dates[0])
  const end = dayjs(dates[1])
  return range(0, start.diff(end, 'day'))
    .map(day => isBooked(bookedDates, start.add(day, 'day')))
    .includes(true)
}
