import React from 'react'
import { Form, Input, Title, Button, Error } from './styles'
export const Login = (props) => (
  <Form onSubmit={props.submit} >
    <Title>Login</Title>
    <Input
      placeholder='usuario'
      type='text'
      {...props.user}
    />
    <Input
      placeholder='contraseña'
      type='password'
      {...props.password}
    />
    {
      props.error && <Error>{props.error}</Error>
    }
    <Button>Login</Button>
  </Form>
)
