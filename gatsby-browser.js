import React from 'react'

import RootWrapper from './src/components/rootWrapper'
import Transition from './src/components/pageTransitions'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapPageElement = ({ element, props }) => (
  <Transition {...props}>{element}</Transition>
)

export const wrapRootElement = RootWrapper