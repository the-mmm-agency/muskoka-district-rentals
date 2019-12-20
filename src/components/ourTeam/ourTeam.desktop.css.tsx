import styled from '@emotion/styled'

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60vh;
`;

export const Root = styled('section')<Record<'color', string>>`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  color: white;
  background-color: white;
  &::before {
    position: absolute;
    z-index: 0;
    min-width: 100%;
    height: calc(60vh + 24.3rem);
    background-color: ${p => p.color};
    content: '';
  }
`;
