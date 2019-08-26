import { eachDay } from 'date-fns'

import { isBooked as checkIfBooked } from 'util/bookedDates'

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
  const isBooked = eachDay(startDate, endDate)
    .map(date => checkIfBooked(property.bookedDates, date))
    .includes(true)
  return !isBooked && hasPets && hasSmokers && enoughSpace
}

export default checkPropertyAvailability
