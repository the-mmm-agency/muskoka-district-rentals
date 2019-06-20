import { keyframes } from '@xstyled/emotion'

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

export const vibrate = keyframes`
  25% {
    transform: translate(-2px);
  }
  75% {
    transform: translate(2px);
  }
`

export const blinkS = keyframes`
  50% {
    opacity: 0;
    filter: alpha(opacity=100);
  }
`

export const blink = keyframes`
  50%,
  100% {
    visibility: hidden;
  }
`

export const pulse = keyframes`
  50% {
    transform: scale(0.5);
  }
`
