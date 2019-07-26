import React from 'react'
import { Form, Input, Title, Button } from './styles'
export const Register = (props) => (
  <Form onSubmit={props.submit} >

    <Title>REGISTRATE</Title>
    <Input
      placeholder='usuario'
      type='email'
      {...props.email} />
    <Input
      placeholder='contraseña'
      type='password'
      {...props.password}
    />
    <Button>Registrate</Button>
  </Form>
)
