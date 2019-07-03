import React from 'react'
import PropTypes from 'prop-types'
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

const PageWrapper = ({ element, props: { location } }) => (
  <PoseGroup>
    <RoutesContainer key={location.pathname}>{element}</RoutesContainer>
  </PoseGroup>
)

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.shape({ location: PropTypes.object.isRequired }).isRequired,
}

export default PageWrapper
