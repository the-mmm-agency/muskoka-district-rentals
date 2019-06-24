import React from 'react'

import RootWrapper from './src/components/rootWrapper'
import Transition from './src/components/pageTransitions'

export const wrapPageElement = ({ element, props }) => (
  <Transition {...props}>{element}</Transition>
)

export const wrapRootElement = RootWrapper
