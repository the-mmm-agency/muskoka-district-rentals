import React, { FC, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

import HorizontalScrollInner, { Button } from './horizontalScroll.css'

import ElasticScroll from 'components/elasticScroll'
import Flex from 'elements/flex'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const HorizontalScroll: FC<Props> = ({ children, ...props }) => {
  if (typeof document === 'undefined') return null;
  const ref = useRef<HTMLDivElement>();
  const scroll = (direction: 'left' | 'right') => {
    const el = ref?.current?.querySelector('[data-elastic-wrapper=true]');
    el?.scroll({
      top: 0,
      left:
        el?.scrollLeft +
        ((direction === 'left' ? -1 : 1) * window.outerWidth) / 2,
      behavior: 'smooth',
    });
  };
  return (
    <Flex position="relative">
      <ElasticScroll>
        <HorizontalScrollInner ref={ref} {...props}>
          {children}
        </HorizontalScrollInner>
      </ElasticScroll>
      <Button onMouseDown={() => scroll('left')}>
        <ChevronLeft size="3em" fill="none" />
      </Button>
      <Button onMouseDown={() => scroll('right')} css={{ right: 0 }}>
        <ChevronRight size="3em" fill="none" />
      </Button>
    </Flex>
  );
};

export default HorizontalScroll;
