import { assoc, map, prop, uniq, pipe } from 'ramda'

const getCategories = pipe(
  map(prop('parent_element')),
  uniq
)

const notChild = (parent, child) => parent.id !== child.parent_element.id

const setAmenities = (amenities, category) =>
  assoc('amenities', amenities.filter(amenity => notChild(category, amenity)))

export default amenities =>
  getCategories(amenities).map(category => setAmenities(amenities, category))
