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
      e.images___NODE = e.gallery
        .split(',')
        .map(c => media.find(gObj => c === gObj.wordpress_id.toString()).id)
      e.lowestRate = rates.find(
        gObj => e.wordpress_id.toString() === gObj.mphb_room_type_id
      ).mphb_season_prices[0].price.prices[0]
      delete e.mphb_room_type_facility
      delete e.mphb_room_type_category
      delete e.mphb_ra_suitability
      delete e.gallery
    }
    return e
  })
}

module.exports = normalizeWordpress
