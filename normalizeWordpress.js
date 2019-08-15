const R = require('ramda')

const getType = R.curry((entities, type) =>
  R.filter(R.propEq('__type', type), entities)
)

const mapIdsToEntities = R.curry((entities, ids) =>
  R.map(
    id =>
      R.pipe(
        R.find(R.propEq('wordpress_id', id)),
        R.prop('id')
      )(entities),
    ids
  )
)

module.exports = ({ entities }) => {
  const getEntities = getType(entities)
  const media = getEntities('wordpress__wp_media')
  const listingTypes = getEntities('wordpress__wp_listing_type')
  const amenities = getEntities('wordpress__wp_amenities')
  const reservations = getEntities('wordpress__wp_homey_reservation')
  return entities.map(e => {
    if (e.__type === 'wordpress__wp_listing') {
      try {
        e.gallery___NODE = mapIdsToEntities(media, e.gallery)
        e.amenities___NODE = mapIdsToEntities(amenities, e.amenities)
        e.listing_type___NODE = mapIdsToEntities(
          listingTypes,
          e.listing_type
        )[0]
        e.reservations___NODE = [reservations[0].id, reservations[1].id]
        // e.reservations___NODE = R.map(
        //   R.prop('id'),
        //   R.filter(
        //     R.propEq('listing_id', e.wordpress_id.toString()),
        //     reservations
        //   )
        // )
      } catch (error) {
        console.error('Error adding the property', error)
      }
    }
    return e
  })
}
