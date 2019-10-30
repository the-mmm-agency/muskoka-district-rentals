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

const Transition = ({ children, pathname }) => (
  <AnimatePresence initial={false} exitBeforeEnter>
    <motion.main enter="enter" exit="exit" key={pathname} variants={variants}>
      {children}
    </motion.main>
  </AnimatePresence>
)

Transition.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Transition
