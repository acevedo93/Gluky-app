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
