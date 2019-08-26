import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  enter: {
    opacity: 1,
    transition: {
      ease: [0.4, 0, 1, 1],
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0, 0, 0.2, 1],
    },
  },
}

const PageWrapper = ({ element, props: { location } }) => (
  <AnimatePresence initial={false} exitBeforeEnter>
    <motion.div
      enter="enter"
      exit="exit"
      key={location.pathname}
      variants={variants}
    >
      {element}
    </motion.div>
  </AnimatePresence>
)

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.shape({ location: PropTypes.object.isRequired }).isRequired,
}

export default PageWrapper
