import React from 'react'
import { Container } from './styles'
import { GoBell } from 'react-icons/go'

export const NotificationsPageLayout = (props) => (
  <Container>
    <h3>Notificaciones</h3>
    {props.children}
    <GoBell size='2rem' />
  </Container>
)
