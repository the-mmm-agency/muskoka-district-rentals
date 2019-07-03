import { useState } from 'react'
import createUseContext from 'constate'

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
  }
}

const useAvailabilityContext = createUseContext(useAvailability)

export default useAvailabilityContext
