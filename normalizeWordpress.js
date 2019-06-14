const normalizeWordpress = ({ entities }) => {
  const suitability = entities.filter(
    e => e.__type === `wordpress__wp_mphb_ra_suitability`
  )
  const categories = entities.filter(
    e => e.__type === `wordpress__wp_mphb_room_type_category`
  )
  const amenities = entities.filter(
    e => e.__type === `wordpress__wp_mphb_room_type_facility`
  )
  const media = entities.filter(e => e.__type === `wordpress__wp_media`)
  const rates = entities.filter(e => e.__type === `wordpress__wp_mphb_rate`)
  const seasons = entities.filter(e => e.__type === `wordpress__wp_mphb_season`)
  const services = entities.filter(
    e => e.__type === `wordpress__wp_mphb_room_service`
  )
  return entities.map(e => {
    if (e.__type === `wordpress__wp_mphb_room_type`) {
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
