import Fade from 'react-reveal/Fade'
import React from 'react'

import Cottage from 'components/cottage'

const CottageList = ({ cottages }) => {
  return cottages.map((cottage, index) => (
    <Fade key={cottage.id}>
      <Cottage {...cottage} reviewAvg={4.5} reviewCount={6} number={index} />
    </Fade>
  ))
}

export default CottageList
