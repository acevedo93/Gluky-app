import React from 'react'
import { Container } from './styles'
export const FriendsLayout = (props) => (
  <Container className={props.fix ? 'fixed' : ''}>
    {props.children}
  </Container>
)
