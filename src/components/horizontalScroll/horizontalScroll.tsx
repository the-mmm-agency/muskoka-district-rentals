import React from 'react'

import HorizontalScrollInner from './horizontalScroll.css'

import ElasticScroll from 'components/elasticScroll'

const HorizontalScroll = ({ children, ...props }) => (
  <ElasticScroll>
    <HorizontalScrollInner {...props}>{children}</HorizontalScrollInner>
  </ElasticScroll>
)

export default HorizontalScroll
