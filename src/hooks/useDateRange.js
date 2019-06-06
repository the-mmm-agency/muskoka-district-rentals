import { useState } from 'react'
import createUseContext from 'constate'
import { DateUtils } from 'react-day-picker'

const useDateRange = () => {
  const [dates, setDates] = useState({
    from: undefined,
    to: undefined,
    guests: 0,
  })
  const addDate = day => {
    const range = DateUtils.addDayToRange(day, dates)
    setDates(range)
  }
  return { dates, addDate }
}

export default createUseContext(useDateRange)
