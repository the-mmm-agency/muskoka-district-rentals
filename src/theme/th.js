import { th } from '@xstyled/system'

export default (name, transform) => p => {
  if (transform) {
    return transform(th(name)(p))
  }
  return th(name)(p)
}
