import styled from 'styled-components'
import { Brand } from '../../styles/brand'
import { Link } from '@reach/router'
export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items: center;
  width: 90%;
  margin: 8% auto;

  `

export const Title = styled.h2`
font-size: 3rem;
`
export const Span = styled.span`
  color: ${Brand.colors.primary};
`
export const SpanLink = styled(Link)`
  color: ${Brand.colors.tertiary};
`
export const DescriptionOne = styled.p`
margin-top: 2%;
  font-size: 1.3rem;
  text-align:center;
`

export const DescriptionTwo = styled.p`
font-size: 1.2rem;
  text-align:center;`

export const Credits = styled.p`
font-size: .8rem;
  text-align:center;`
