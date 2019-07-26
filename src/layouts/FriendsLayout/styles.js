import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
export const Container = styled.section`
  display: flex;
  width: 100%;
  overflow: scroll;
  overflow-y:hidden;
  @media (max-width: 768px) {
  &.fixed {
    background: #fff;
    border-radius: 10;
    left: 0;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 400px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.8);
    z-index: 2000;
    ${fadeIn({ time: '1s' })}
  }}
  @media (min-width: 768px) {
  justify-content:space-around;
  flex-direction:column;
  flex: .2;
  height: 300px;
  margin: 0 auto;
  overflow-y:scroll;
  overflow-x:hidden;
  padding:2%;
  &.fixed {
    background: #fff;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 400px;
    position: fixed;
    top: -20px;
    transform: scale(0.8);
    z-index: 2000;
    ${fadeIn({ time: '4s' })}
  }}
  }
`
