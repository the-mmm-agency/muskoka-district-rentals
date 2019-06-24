import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 500,
    beforeChildren: 300,
    transition: {
      ease: [0.4, 0, 1, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0, 0, 0.2, 1],
    },
  },
})

const PageTransitions = ({ children, location }) => (
  <PoseGroup>
    <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
  </PoseGroup>
)

export default PageTransitions
