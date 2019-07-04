import { eachDay, isWithinRange, getDay } from 'date-fns'

const getSeasonPrices = rates => rates.flatMap(rate => rate.seasonPrices)
const getSeasons = seasonPrices =>
  seasonPrices.flatMap(seasonPrice => seasonPrice.season)

const checkPropertyAvailability = (
  property,
  startDate,
  endDate,
  guests,
  pets,
  smokers
) => {
  const seasonPrices = getSeasonPrices(property.rates)
  const seasons = getSeasons(seasonPrices)
  const range = eachDay(startDate, endDate)

  const enoughSpace = property.capacity >= guests

  const isSuitable = name =>
    property.suitability.filter(s => s.name === name).length !== 0

  const hasPets = pets ? isSuitable('pets') : true

  const hasSmokers = smokers ? isSuitable('smokers') : true

  const inRange = seasons
    .map(season => {
      const inSeason = date =>
        isWithinRange(date, season.startDate, season.endDate)
      const withinSeason = inSeason(startDate) && inSeason(endDate)
      const validDays = range
        .map(date => season.days.includes(getDay(date)))
        .every(result => result)
      return withinSeason && validDays
    })
    .includes(true)

  const isBooked = property.bookings
    .map(booking => {
      const isBooked = date =>
        isWithinRange(
          date,
          booking.mphb_check_in_date,
          booking.mphb_check_out_date
        )
      return range.map(isBooked).includes(true)
    })
    .includes(true)

  return inRange && !isBooked && hasPets && hasSmokers && enoughSpace
}

export default checkPropertyAvailability
