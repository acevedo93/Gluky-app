import React from 'react'
import { Container, Title } from './styles'
export const AlbumDetailLayout = (props) => (
  <Container>
    <Title>{props.title}</Title>
    {props.children}
  </Container>
)
