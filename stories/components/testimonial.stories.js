import React from 'react'
import { storiesOf } from '@storybook/react'

import Testimonial from '../../src/components/testimonial'

storiesOf('Testimonial', module).add('Testimonial', () => (
  <Testimonial
    body="test"
    rating={3}
    author="Brett Mandler"
    property={{
      name: 'test',
      location: 'test',
    }}
  />
))
