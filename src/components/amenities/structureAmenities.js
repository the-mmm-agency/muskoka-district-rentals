import {
  assoc,
  filter,
  curry,
  map,
  not,
  prop,
  uniq,
  pipe,
  eqProps,
} from 'ramda'

const getCategories = pipe(
  map(prop('parent_element')),
  uniq
)

const notChild = curry((parent, child) =>
  pipe(
    prop('parent_element'),
    eqProps('id', parent),
    not
  )(child)
)

const setAmenities = curry((amenities, category) =>
  assoc('amenities', filter(notChild(category), amenities), category)
)

export default amenities =>
  pipe(
    getCategories,
    map(setAmenities(amenities))
  )(amenities)
