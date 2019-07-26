import React from 'react'
import { Container,
  Title,
  DescriptionOne,
  DescriptionTwo,
  Span,
  SpanLink,
  Credits
} from './styles'
import { Logo } from '../Logo'
export const HomePresentation = () => (
  <Container>
    <Title>Bienvenido a  Gl<Span>ü</Span>kyers</Title>
    <DescriptionOne>
      Aca podras encontrar personas que comparten lo que mejor hacen ARTE!
      con cultura gluky
    </DescriptionOne>
    <Logo />
    <DescriptionTwo>
      <SpanLink to='/login-register'>Ingresa</SpanLink> para conocer a nuevas personas!
    </DescriptionTwo>
    <Credits>
      Aplicacion con fin de uso personal para caso Front-end gluky
    </Credits>
  </Container>
)
