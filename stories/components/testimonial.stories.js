import React from 'react'
import { storiesOf } from '@storybook/react'

import data from '../../data/testimonials.json'
import Testimonial from '../../src/components/testimonial'

storiesOf('Testimonial', module).add('Testimonial', () => (
  <Testimonial {...data[0]} />
))
