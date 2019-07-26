import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
@media (min-width: 768px) {
    display:flex;
    align-items:center;
  }
`

export const Image = styled.img`
  border: 1px solid #ddd;

  border-radius: 50%;
  height: auto;

  height: 75px;
  width: 75px;
`

export const Name = styled.h4`
  color:black;
  margin-left:2%;
  @media (max-width: 768px) {
    display:none;
  }
`
