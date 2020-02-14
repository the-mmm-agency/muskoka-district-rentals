import React, {
  FC,
  MutableRefObject,
  RefObject,
  useRef
} from 'react'

import HorizontalScrollInner, { Button } from './horizontalScroll.css'

import ElasticScroll from 'components/elasticScroll'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const HorizontalScroll: FC<Props> = ({ children, ...props }) => {
  if (typeof document === 'undefined') return null;
  const ref = useRef<HTMLDivElement>();
  const right = () => {
    const el = ref?.current?.querySelector('[data-elastic-wrapper=true]');
    el?.scroll(el.scrollLeft + 300, 0);
  };
  const left = () => {
    const el = ref?.current?.querySelector('[data-elastic-wrapper=true]');
    el?.scroll(el.scrollLeft - 300, 0);
  };
  return (
    <>
      <ElasticScroll>
        <HorizontalScrollInner ref={ref} {...props}>
          {children}
        </HorizontalScrollInner>
      </ElasticScroll>
      <Button onMouseDown={left}>&#8249;</Button>
      <Button onMouseDown={right} css={{ right: 0 }}>
        &#8250;
      </Button>
    </>
  );
};

export default HorizontalScroll;
