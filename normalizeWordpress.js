const R = require('ramda')

const getType = R.curry((entities, type) =>
  R.filter(R.propEq('__type', type), entities)
)

const normalizeWordpress = ({ entities }) => {
  const getEntities = getType(entities)
  const suitability = getEntities('wordpress__wp_mphb_ra_suitability')
  const categories = getEntities('wordpress__wp_mphb_room_type_category')
  const amenities = getEntities('wordpress__wp_mphb_room_type_facility')
  const media = getEntities('wordpress__wp_media')
  const rates = getEntities('wordpress__wp_mphb_rate')
  const seasons = getEntities('wordpress__wp_mphb_season')
  const services = getEntities('wordpress__wp_mphb_room_service')
  const bookings = getEntities('wordpress__wp_mphb_booking')
  return entities.map(e => {
    if (e.__type === 'wordpress__wp_mphb_room_type') {
      try {
        e.bookings___NODE = bookings
          .filter(booking => booking.mphb_reserved_room_id === e.wordpress_id)
          .map(booking => booking.id)
      } catch (error) {
        console.log(bookings)
      }
      e.categories___NODE = e.mphb_room_type_category.map(
        c => categories.find(gObj => c === gObj.wordpress_id).id
      )
      e.amenities___NODE = e.mphb_room_type_facility.map(
        c => amenities.find(gObj => c === gObj.wordpress_id).id
      )
      e.suitability___NODE = e.mphb_ra_suitability.map(
        c => suitability.find(gObj => c === gObj.wordpress_id).id
      )
      e.services___NODE = e.services.map(
        c => services.find(gObj => c === gObj.wordpress_id.toString()).id
      )
      e.images___NODE = e.gallery
        .split(',')
        .map(c => media.find(gObj => c === gObj.wordpress_id.toString()).id)
      e.lowestRate = rates.find(
        gObj => e.wordpress_id.toString() === gObj.roomType
      ).seasonPrices[0].price.prices[0]
      e.rates = rates
        .filter(gObj => e.wordpress_id.toString() === gObj.roomType)
        .map(rate => ({
          ...rate,
          seasonPrices: rate.seasonPrices.map(seasonPrices => ({
            ...seasonPrices,
            season: seasons
              .filter(
                gObj => gObj.wordpress_id.toString() === seasonPrices.season
              )
              .map(season => ({
                ...season,
                days: season.days.map(day => parseInt(day, 10)),
              })),
          })),
        }))

      delete e.mphb_room_type_facility
      delete e.mphb_room_type_category
      delete e.mphb_ra_suitability
      delete e.gallery
    }
    return e
  })
}

module.exports = normalizeWordpress
