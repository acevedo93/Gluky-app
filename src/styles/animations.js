import { keyframes, css } from 'styled-components'

export const SelectPum = ({ time = '0.5s', type = 'ease' } = {}) =>
  css` animation: ${time} ${SelectPumAnimation} ${type};`

const SelectPumAnimation = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1)
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css` animation: ${time} ${fadeInKeyFrames} ${type};`
const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`
