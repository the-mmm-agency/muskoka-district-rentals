import React from 'react'
import renderer from 'react-test-renderer'

import GuestServices from 'pages/guest-services'

test('it matches the snapshot', () => {
  const tree = renderer.create(<GuestServices />).toJSON()
  expect(tree).toMatchSnapshot()
})
