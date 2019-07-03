import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateUtils } from 'react-day-picker'
import { StateDecorator, Store } from '@sambego/storybook-state'

import DatePicker from '../../src/components/datePicker'

const store = new Store({
  from: '',
  to: '',
})

storiesOf('Date Picker', module)
  .addDecorator(StateDecorator(store))
  .add('Date Picker', () => (
    <DatePicker
      open
      handleDayClick={day =>
        store.set(DateUtils.addDayToRange(day, store.get()))
      }
    />
  ))
