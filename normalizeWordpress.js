const R = require('ramda')

const getType = R.curry((entities, type) =>
  R.filter(R.propEq('__type', `wordpress__wp_${type}`), entities)
)

const mapIdsToEntities = R.curry((entities, ids) =>
  R.map(
    id =>
      R.pipe(
        R.find(R.propEq('wordpress_id', id)),
        R.prop('id')
      )(Array.isArray(entities) ? entities : []),
    ids
  )
)

const mapTypeToEntities = R.curry((entities, type, ids) =>
  mapIdsToEntities(getType(entities, type), ids)
)

module.exports = ({ entities }) => {
  const mapType = mapTypeToEntities(entities)
  return entities.map(e => {
    if (e.__type === 'wordpress__wp_property') {
      e.suitability = e.suitability === '' ? [] : e.suitability
      e.category___NODE = mapType('property_category', e.property_category)[0]
      delete e.property_category
    }
    if (e.__type === 'wordpress__wp_blog_post') {
      e.category___NODE = mapType('category', e.category)[0]
      e.tags___NODE = mapType('post_tag', e.post_tag)
      delete e.post_tag
    }
    return e
  })
}
