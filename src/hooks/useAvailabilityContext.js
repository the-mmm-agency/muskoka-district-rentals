import { useState } from 'react'
import createUseContext from 'constate'

import { isBookedInRange } from 'util/bookedDates'

const handleDay = func => day => {
  func(day)
}

const handleCheck = func => event => {
  func(event.target.checked)
}

const useAvailability = () => {
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(new Date())
  const handleFrom = handleDay(setFrom)
  const handleTo = handleDay(setTo)

  const [pets, setPets] = useState(false)
  const [smokers, setSmokers] = useState(false)
  const handlePets = handleCheck(setPets)
  const handleSmokers = handleCheck(setSmokers)

  const [guests, handleGuests] = useState(1)

  const filterProperties = properties =>
    properties.filter(
      ({ guests: accommodates, suitability, bookedDates }) =>
        accommodates >= guests &&
        (!pets || suitability.includes('Pets')) &&
        (!smokers || suitability.includes('Smoking')) &&
        !isBookedInRange(bookedDates, [from, to])
    )

  return {
    from,
    to,
    handleFrom,
    handleTo,
    pets,
    smokers,
    handlePets,
    handleSmokers,
    guests,
    handleGuests,
    filterProperties,
  }
}

const useAvailabilityContext = createUseContext(useAvailability)

export default useAvailabilityContext
