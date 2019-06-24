import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 },
})

const PageTransitions = ({ children, location }) => (
  <PoseGroup>
    <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
  </PoseGroup>
)

export default PageTransitions
