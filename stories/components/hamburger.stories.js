import React from 'react'
import { storiesOf } from '@storybook/react'
import { StateDecorator, Store } from '@sambego/storybook-state'

import Hamburger from 'components/hamburger'

const store = new Store({
  active: false,
})

storiesOf('Hamburger', module)
  .addDecorator(StateDecorator(store))
  .add('Hamburger', () => (
    <Hamburger
      onClick={() => store.set({ active: !store.get('active') })}
      active={store.get('active')}
    />
  ))
