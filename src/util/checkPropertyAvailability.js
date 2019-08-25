import { isWithinRange } from 'date-fns'

const checkPropertyAvailability = (
  property,
  startDate,
  endDate,
  guests,
  pets,
  smokers
) => {
  const enoughSpace = property.guests >= guests
  const checkSuitability = value => property.suitability.indexOf(value) !== 1
  const hasPets = pets ? checkSuitability('Pets') : true
  const hasSmokers = smokers ? checkSuitability('Smoking') : true
  const isBooked = property.bookedDates
    .map(date =>
      isWithinRange(new Date(date).toISOString(), startDate, endDate)
    )
    .includes(true)
  return !isBooked && hasPets && hasSmokers && enoughSpace
}

export default checkPropertyAvailability
