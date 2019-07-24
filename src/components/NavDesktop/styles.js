import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { Brand } from '../../styles/brand'

export const Nav = styled.nav`
  display:flex;
  justify-content:space-around;
  align-content:center;
`
export const List = styled.ul`
   display:flex;
   width: 20%;
   align-items:center;
   @media (max-width: 768px) {
    display:none
  }
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #67717a;
  flex: .5
  /* justify-content: center;
  text-decoration: none; */
 
  &[aria-current] {
    color: ${Brand.colors.tertiary};
  }
`
