import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { SelectPum } from '../../styles/animations'
import { Brand } from '../../styles/brand'

export const Nav = styled.nav`
  align-items: center;
  background: ${Brand.colors.white};
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  z-index: 1000;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  width: 100%;
  @media (min-width: 768px) {
    display:none
  }
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: ${Brand.colors.grey};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: ${Brand.colors.tertiary};
    ${SelectPum}
  }
`
