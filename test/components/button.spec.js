import React from 'react'
import renderer from 'react-test-renderer'

import Button from 'components/button'
import palette from 'theme/palette'
import { options as typography } from 'theme/typography'

test('it matches the snapshot', () => {
  const tree = renderer.create(<Button>Test Button</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  const tree = renderer
    .create(
      <Button color="secondary" font="serif" radius="curved" size="small">
        Test Button
      </Button>
    )
    .toJSON()
  expect(tree).toHaveStyleRule('background', palette.secondary)
  expect(tree).toHaveStyleRule(
    'font-family',
    typography.headerFontFamily.join(',')
  )
  expect(tree).toHaveStyleRule('font-size', '0.65rem')
  expect(tree).toHaveStyleRule('border-radius', '6px')
})
