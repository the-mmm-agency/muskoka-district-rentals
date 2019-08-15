import { eachDay, isWithinRange } from 'date-fns'

const checkPropertyAvailability = (
  property,
  startDate,
  endDate,
  guests,
  pets,
  smokers
) => {
  const range = eachDay(startDate, endDate)
  const enoughSpace = property.guests >= guests
  const hasPets = pets ? property.pets === 1 : true
  const hasSmokers = smokers ? property.smoke === 1 : true
  const isBooked = property.reservations
    .map(reservation => {
      const isBooked = date =>
        isWithinRange(date, reservation.checkin_date, reservation.checkout_date)
      return range.map(isBooked).includes(true)
    })
    .includes(true)
  return !isBooked && hasPets && hasSmokers && enoughSpace
}

export default checkPropertyAvailability
