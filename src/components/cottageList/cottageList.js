import React from 'react'

import Cottage from 'components/cottage'

const CottageList = ({ cottages }) => {
  return cottages.map((cottage, index) => (
    <Cottage
      key={cottage.id}
      {...cottage}
      reviewAvg={4.5}
      reviewCount={6}
      number={index}
    />
  ))
}

export default CottageList
